:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picopore'
.. highlight: bash

picopore
========

.. conda:recipe:: picopore
   :replaces_section_title:
   :noindex:

   A tool for reducing the size of Oxford Nanopore Technologies\' datasets without losing information.

   :homepage: https://github.com/scottgigante/picopore
   :license: LGPL / GNU General Public License (GPL)
   :recipe: /`picopore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picopore/meta.yaml>`_

   


.. conda:package:: picopore

   |downloads_picopore| |docker_picopore|

   :versions:
      
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.2-0``,  ``1.0.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on future: 
   :depends on h5py: ``>2.2.0``
   :depends on hdf5: ``>=1.10.2,<1.10.3.0a0``
   :depends on python: 
   :depends on watchdog: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install picopore

to add into an existing workspace instead, run::

    pixi add picopore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install picopore

Alternatively, to install into a new environment, run::

    conda create -n envname picopore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/picopore:<tag>

(see `picopore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_picopore| image:: https://img.shields.io/conda/dn/bioconda/picopore.svg?style=flat
   :target: https://anaconda.org/bioconda/picopore
   :alt:   (downloads)
.. |docker_picopore| image:: https://quay.io/repository/biocontainers/picopore/status
   :target: https://quay.io/repository/biocontainers/picopore
.. _`picopore/tags`: https://quay.io/repository/biocontainers/picopore?tab=tags


.. raw:: html

    <script>
        var package = "picopore";
        var versions = ["1.2.0","1.2.0","1.1.5","1.1.4","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picopore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picopore/README.html