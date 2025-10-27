:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multiqc-xenium-extra'
.. highlight: bash

multiqc-xenium-extra
====================

.. conda:recipe:: multiqc-xenium-extra
   :replaces_section_title:
   :noindex:

   MultiQC plugin for extra Xenium spatial transcriptomics analysis

   :homepage: https://seqera.io/multiqc
   :documentation: https://docs.seqera.io/multiqc/modules/xenium
   
   :developer docs: https://github.com/MultiQC/xenium-extra
   :license: MIT
   :recipe: /`multiqc-xenium-extra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-xenium-extra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multiqc-xenium-extra/meta.yaml>`_

   


.. conda:package:: multiqc-xenium-extra

   |downloads_multiqc-xenium-extra| |docker_multiqc-xenium-extra|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends multiqc: ``>=1.32``
   :depends polars-lts-cpu: 
   :depends python: ``>=3.9``
   :depends scanpy: ``>=1.9.0``
   :depends scipy: ``>=1.8.0``
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

      mamba install multiqc-xenium-extra

   and update with::

      mamba update multiqc-xenium-extra

  To create a new environment, run::

      mamba create --name myenvname multiqc-xenium-extra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multiqc-xenium-extra:<tag>

   (see `multiqc-xenium-extra/tags`_ for valid values for ``<tag>``)


.. |downloads_multiqc-xenium-extra| image:: https://img.shields.io/conda/dn/bioconda/multiqc-xenium-extra.svg?style=flat
   :target: https://anaconda.org/bioconda/multiqc-xenium-extra
   :alt:   (downloads)
.. |docker_multiqc-xenium-extra| image:: https://quay.io/repository/biocontainers/multiqc-xenium-extra/status
   :target: https://quay.io/repository/biocontainers/multiqc-xenium-extra
.. _`multiqc-xenium-extra/tags`: https://quay.io/repository/biocontainers/multiqc-xenium-extra?tab=tags


.. raw:: html

    <script>
        var package = "multiqc-xenium-extra";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multiqc-xenium-extra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multiqc-xenium-extra/README.html