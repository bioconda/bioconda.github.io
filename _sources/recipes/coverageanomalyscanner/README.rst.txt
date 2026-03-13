:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coverageanomalyscanner'
.. highlight: bash

coverageanomalyscanner
======================

.. conda:recipe:: coverageanomalyscanner
   :replaces_section_title:
   :noindex:

   Application to find local anomalies in read coverage and to predict putative SV events.

   :homepage: https://github.com/rki-mf1/CoverageAnomalyScanner
   :license: GPL-3.0 license
   :recipe: /`coverageanomalyscanner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverageanomalyscanner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coverageanomalyscanner/meta.yaml>`_

   


.. conda:package:: coverageanomalyscanner

   |downloads_coverageanomalyscanner| |docker_coverageanomalyscanner|

   :versions:
      
      

      ``0.2.3-4``,  ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libcurl: ``>=8.10.1,<9.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
   :depends on zlib: 

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

    pixi global install coverageanomalyscanner

to add into an existing workspace instead, run::

    pixi add coverageanomalyscanner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coverageanomalyscanner

Alternatively, to install into a new environment, run::

    conda create -n envname coverageanomalyscanner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coverageanomalyscanner:<tag>

(see `coverageanomalyscanner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coverageanomalyscanner| image:: https://img.shields.io/conda/dn/bioconda/coverageanomalyscanner.svg?style=flat
   :target: https://anaconda.org/bioconda/coverageanomalyscanner
   :alt:   (downloads)
.. |docker_coverageanomalyscanner| image:: https://quay.io/repository/biocontainers/coverageanomalyscanner/status
   :target: https://quay.io/repository/biocontainers/coverageanomalyscanner
.. _`coverageanomalyscanner/tags`: https://quay.io/repository/biocontainers/coverageanomalyscanner?tab=tags


.. raw:: html

    <script>
        var package = "coverageanomalyscanner";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coverageanomalyscanner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coverageanomalyscanner/README.html