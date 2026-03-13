:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyeasyfuse'
.. highlight: bash

pyeasyfuse
==========

.. conda:recipe:: pyeasyfuse
   :replaces_section_title:
   :noindex:

   EasyFuse is a pipeline to detect fusion transcripts from RNA\-seq data with high accuracy. The current version of EasyFuse uses two fusion gene detection tools\, STAR\-Fusion and Fusioncatcher along with a powerful read filtering strategy\, stringent re\-quantification of supporting reads and machine learning for highly accurate predictions.

   :homepage: https://github.com/TRON-bioinformatics/easyfuse-src
   :documentation: https://github.com/TRON-Bioinformatics/EasyFuse
   
   :developer docs: https://pypi.org/project/pyeasyfuse/
   :license: GPL / GPL-3.0-only
   :recipe: /`pyeasyfuse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeasyfuse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyeasyfuse/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01247-9`

   


.. conda:package:: pyeasyfuse

   |downloads_pyeasyfuse| |docker_pyeasyfuse|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends on biopython: ``1.73.*``
   :depends on bx-python: ``0.8.*``
   :depends on gffutils: ``0.10.*``
   :depends on importlib-metadata: 
   :depends on logzero: ``1.7.*``
   :depends on numpy: ``1.21.*``
   :depends on pandas: ``>=1.0.0``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.7,<3.8``
   :depends on python-xxhash: ``1.4.*``
   :depends on pytz: ``2022.7.*``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-dplyr: 
   :depends on r-optparse: 
   :depends on r-randomforest: 
   :depends on r-readr: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-tidyselect: 
   :depends on r-xml: 

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

    pixi global install pyeasyfuse

to add into an existing workspace instead, run::

    pixi add pyeasyfuse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyeasyfuse

Alternatively, to install into a new environment, run::

    conda create -n envname pyeasyfuse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyeasyfuse:<tag>

(see `pyeasyfuse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyeasyfuse| image:: https://img.shields.io/conda/dn/bioconda/pyeasyfuse.svg?style=flat
   :target: https://anaconda.org/bioconda/pyeasyfuse
   :alt:   (downloads)
.. |docker_pyeasyfuse| image:: https://quay.io/repository/biocontainers/pyeasyfuse/status
   :target: https://quay.io/repository/biocontainers/pyeasyfuse
.. _`pyeasyfuse/tags`: https://quay.io/repository/biocontainers/pyeasyfuse?tab=tags


.. raw:: html

    <script>
        var package = "pyeasyfuse";
        var versions = ["2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyeasyfuse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyeasyfuse/README.html