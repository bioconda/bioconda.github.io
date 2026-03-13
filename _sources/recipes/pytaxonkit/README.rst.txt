:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytaxonkit'
.. highlight: bash

pytaxonkit
==========

.. conda:recipe:: pytaxonkit
   :replaces_section_title:
   :noindex:

   Python bindings for the TaxonKit library.

   :homepage: https://github.com/bioforensics/pytaxonkit/
   :license: BSD / BSD-3-Clause
   :recipe: /`pytaxonkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytaxonkit/meta.yaml>`_

   


.. conda:package:: pytaxonkit

   |downloads_pytaxonkit| |docker_pytaxonkit|

   :versions:
      
      

      ``0.10.1-0``,  ``0.10-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9-0``,  ``0.8-0``,  ``0.7.2-0``,  ``0.6.1-0``,  ``0.6-0``

      

   
   :depends on pandas: ``>=1.0``
   :depends on pytest: ``>=5.4``
   :depends on python: ``3.*``
   :depends on setuptools: 
   :depends on setuptools-scm: 
   :depends on taxonkit: ``>=0.20``

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

    pixi global install pytaxonkit

to add into an existing workspace instead, run::

    pixi add pytaxonkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytaxonkit

Alternatively, to install into a new environment, run::

    conda create -n envname pytaxonkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytaxonkit:<tag>

(see `pytaxonkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytaxonkit| image:: https://img.shields.io/conda/dn/bioconda/pytaxonkit.svg?style=flat
   :target: https://anaconda.org/bioconda/pytaxonkit
   :alt:   (downloads)
.. |docker_pytaxonkit| image:: https://quay.io/repository/biocontainers/pytaxonkit/status
   :target: https://quay.io/repository/biocontainers/pytaxonkit
.. _`pytaxonkit/tags`: https://quay.io/repository/biocontainers/pytaxonkit?tab=tags


.. raw:: html

    <script>
        var package = "pytaxonkit";
        var versions = ["0.10.1","0.10","0.9.1","0.9.1","0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytaxonkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytaxonkit/README.html