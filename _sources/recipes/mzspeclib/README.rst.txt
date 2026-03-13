:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mzspeclib'
.. highlight: bash

mzspeclib
=========

.. conda:recipe:: mzspeclib
   :replaces_section_title:
   :noindex:

   HUPO\-PSI Spectral library format

   :homepage: https://github.com/HUPO-PSI/mzSpecLib
   :documentation: https://mzspeclib-py.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/HUPO-PSI/mzspeclib-py
   :license: APACHE / Apache-2.0
   :recipe: /`mzspeclib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzspeclib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mzspeclib/meta.yaml>`_

   


.. conda:package:: mzspeclib

   |downloads_mzspeclib| |docker_mzspeclib|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.1-0``

      

   
   :depends on click: 
   :depends on mzpaf: 
   :depends on psims: ``>=1.3.4``
   :depends on pyteomics: ``>=4.5.3``
   :depends on python: ``>=3.8``
   :depends on sqlalchemy: 

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

    pixi global install mzspeclib

to add into an existing workspace instead, run::

    pixi add mzspeclib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mzspeclib

Alternatively, to install into a new environment, run::

    conda create -n envname mzspeclib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mzspeclib:<tag>

(see `mzspeclib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mzspeclib| image:: https://img.shields.io/conda/dn/bioconda/mzspeclib.svg?style=flat
   :target: https://anaconda.org/bioconda/mzspeclib
   :alt:   (downloads)
.. |docker_mzspeclib| image:: https://quay.io/repository/biocontainers/mzspeclib/status
   :target: https://quay.io/repository/biocontainers/mzspeclib
.. _`mzspeclib/tags`: https://quay.io/repository/biocontainers/mzspeclib?tab=tags


.. raw:: html

    <script>
        var package = "mzspeclib";
        var versions = ["1.0.7","1.0.5","1.0.3","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mzspeclib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mzspeclib/README.html