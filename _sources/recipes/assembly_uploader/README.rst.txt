:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assembly_uploader'
.. highlight: bash

assembly_uploader
=================

.. conda:recipe:: assembly_uploader
   :replaces_section_title:
   :noindex:

   Python scripts to upload primary metagenome and metatranscriptome assemblies to ENA on a per\-study basis. The scripts generate xmls to register a new study and create manifests necessary for submission with webin\-cli.

   :homepage: https://github.com/EBI-Metagenomics/assembly_uploader
   :documentation: https://github.com/EBI-Metagenomics/assembly_uploader/blob/main/README.md
   
   :license: APACHE / Apache-2.0
   :recipe: /`assembly_uploader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly_uploader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly_uploader/meta.yaml>`_

   


.. conda:package:: assembly_uploader

   |downloads_assembly_uploader| |docker_assembly_uploader|

   :versions:
      
      

      ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-0``

      

   
   :depends click: ``>=8.1.8``
   :depends ena-webin-cli: ``>=9.0.1``
   :depends mgnify-pipelines-toolkit: ``>=1.4.5``
   :depends python: ``>=3.8``
   :depends requests: ``2.32.3``
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

      mamba install assembly_uploader

   and update with::

      mamba update assembly_uploader

  To create a new environment, run::

      mamba create --name myenvname assembly_uploader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/assembly_uploader:<tag>

   (see `assembly_uploader/tags`_ for valid values for ``<tag>``)


.. |downloads_assembly_uploader| image:: https://img.shields.io/conda/dn/bioconda/assembly_uploader.svg?style=flat
   :target: https://anaconda.org/bioconda/assembly_uploader
   :alt:   (downloads)
.. |docker_assembly_uploader| image:: https://quay.io/repository/biocontainers/assembly_uploader/status
   :target: https://quay.io/repository/biocontainers/assembly_uploader
.. _`assembly_uploader/tags`: https://quay.io/repository/biocontainers/assembly_uploader?tab=tags


.. raw:: html

    <script>
        var package = "assembly_uploader";
        var versions = ["1.3.5","1.3.5","1.3.4","1.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly_uploader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly_uploader/README.html