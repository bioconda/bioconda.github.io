:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'apscale'
.. highlight: bash

apscale
=======

.. conda:recipe:: apscale
   :replaces_section_title:
   :noindex:

   Advanced Pipeline for Simple yet Comprehensive AnaLysEs of DNA metabarcoding data.

   :homepage: https://github.com/DominikBuchner/apscale
   :documentation: https://github.com/DominikBuchner/apscale/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`apscale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apscale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/apscale/meta.yaml>`_
   :links: doi: :doi:`biotools:apscale`

   


.. conda:package:: apscale

   |downloads_apscale| |docker_apscale|

   :versions:
      
      

      ``3.0.2-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.0-0``,  ``1.7.1-0``,  ``1.6.3-0``,  ``1.5.5-0``

      

   
   :depends biopython: ``>=1.78``
   :depends cutadapt: ``>=3.5``
   :depends demultiplexer2: ``>=1.1.5``
   :depends fastparquet: ``>=0.8.0``
   :depends joblib: ``>=1.0.0``
   :depends openpyxl: ``>=3.0.10``
   :depends pandas: ``>=1.5.0``
   :depends psutil: ``>=5.8.0``
   :depends pyarrow: ``>=7.0.0``
   :depends python: ``>=3.8``
   :depends tqdm: ``>=4.56.0``
   :depends vsearch: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install apscale

   and update with::

      mamba update apscale

  To create a new environment, run::

      mamba create --name myenvname apscale

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/apscale:<tag>

   (see `apscale/tags`_ for valid values for ``<tag>``)


.. |downloads_apscale| image:: https://img.shields.io/conda/dn/bioconda/apscale.svg?style=flat
   :target: https://anaconda.org/bioconda/apscale
   :alt:   (downloads)
.. |docker_apscale| image:: https://quay.io/repository/biocontainers/apscale/status
   :target: https://quay.io/repository/biocontainers/apscale
.. _`apscale/tags`: https://quay.io/repository/biocontainers/apscale?tab=tags


.. raw:: html

    <script>
        var package = "apscale";
        var versions = ["3.0.2","2.0.4","2.0.3","2.0.2","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/apscale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/apscale/README.html