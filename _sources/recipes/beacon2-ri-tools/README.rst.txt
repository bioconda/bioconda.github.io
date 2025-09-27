:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'beacon2-ri-tools'
.. highlight: bash

beacon2-ri-tools
================

.. conda:recipe:: beacon2-ri-tools
   :replaces_section_title:
   :noindex:

   Package of tools designed to simplify the population of a Beacon v2 mongoDB database

   :homepage: https://github.com/EGA-archive/beacon2-ri-tools-v2/tree/main
   :license: Apache-2.0
   :recipe: /`beacon2-ri-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/beacon2-ri-tools/meta.yaml>`_

   Beacon2 RI Tools v2 is a software created with the main goal of generating BFF data from .csv or .vcf \(and probably more types of datafiles in the future\). This is based on the first beacon ri tools. Currently\, the supported input formats are VCF\, CSV\, and Phenopackets. These formats are converted to BFF \(Beacon Friendly Format JSON\, following Beacon v2 official specifications\) and inserted into a Beacon database.


.. conda:package:: beacon2-ri-tools

   |downloads_beacon2-ri-tools| |docker_beacon2-ri-tools|

   :versions:
      
      

      ``2.0.5-0``,  ``2.0.0-0``

      

   
   :depends annotated-types: ``0.6.0``
   :depends certifi: ``2023.7.22``
   :depends charset-normalizer: ``3.3.1``
   :depends cyvcf2: ``0.30.28``
   :depends openpyxl: ``3.1.2``
   :depends pandas: ``2.1.2``
   :depends pydantic: ``2.6.4``
   :depends pymongo: ``4.6.1``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-dateutil: ``2.8.2``
   :depends tqdm: ``4.66.1``
   :depends typing: ``3.7.4.3``
   :depends typing_extensions: ``4.11.0``
   :depends urllib3: ``2.0.7``
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

      mamba install beacon2-ri-tools

   and update with::

      mamba update beacon2-ri-tools

  To create a new environment, run::

      mamba create --name myenvname beacon2-ri-tools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/beacon2-ri-tools:<tag>

   (see `beacon2-ri-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_beacon2-ri-tools| image:: https://img.shields.io/conda/dn/bioconda/beacon2-ri-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/beacon2-ri-tools
   :alt:   (downloads)
.. |docker_beacon2-ri-tools| image:: https://quay.io/repository/biocontainers/beacon2-ri-tools/status
   :target: https://quay.io/repository/biocontainers/beacon2-ri-tools
.. _`beacon2-ri-tools/tags`: https://quay.io/repository/biocontainers/beacon2-ri-tools?tab=tags


.. raw:: html

    <script>
        var package = "beacon2-ri-tools";
        var versions = ["2.0.5","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/beacon2-ri-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/beacon2-ri-tools/README.html