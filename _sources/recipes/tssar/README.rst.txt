:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tssar'
.. highlight: bash

tssar
=====

.. conda:recipe:: tssar
   :replaces_section_title:
   :noindex:

   TSSAR is a Web Service for predicting bacterial Transcription Start Sites from dRNA\-seq data.

   :homepage: http://rna.tbi.univie.ac.at/TSSAR
   :license: GNU General Public License v2.0
   :recipe: /`tssar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tssar/meta.yaml>`_

   


.. conda:package:: tssar

   |downloads_tssar| |docker_tssar|

   :versions:
      
      

      ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-skellam: 
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install tssar

   and update with::

      mamba update tssar

  To create a new environment, run::

      mamba create --name myenvname tssar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tssar:<tag>

   (see `tssar/tags`_ for valid values for ``<tag>``)


.. |downloads_tssar| image:: https://img.shields.io/conda/dn/bioconda/tssar.svg?style=flat
   :target: https://anaconda.org/bioconda/tssar
   :alt:   (downloads)
.. |docker_tssar| image:: https://quay.io/repository/biocontainers/tssar/status
   :target: https://quay.io/repository/biocontainers/tssar
.. _`tssar/tags`: https://quay.io/repository/biocontainers/tssar?tab=tags


.. raw:: html

    <script>
        var package = "tssar";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tssar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tssar/README.html