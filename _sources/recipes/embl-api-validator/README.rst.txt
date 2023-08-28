:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'embl-api-validator'
.. highlight: bash

embl-api-validator
==================

.. conda:recipe:: embl-api-validator
   :replaces_section_title:
   :noindex:

   ENA flat file validator for submission

   :homepage: http://www.ebi.ac.uk/ena/software/flat-file-validator
   :license: Apache-2-0
   :recipe: /`embl-api-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embl-api-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embl-api-validator/meta.yaml>`_

   


.. conda:package:: embl-api-validator

   |downloads_embl-api-validator| |docker_embl-api-validator|

   :versions:
      
      

      ``1.1.180-1``,  ``1.1.180-0``,  ``1.1.173-0``

      

   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install embl-api-validator

   and update with::

      mamba update embl-api-validator

  To create a new environment, run::

      mamba create --name myenvname embl-api-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/embl-api-validator:<tag>

   (see `embl-api-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_embl-api-validator| image:: https://img.shields.io/conda/dn/bioconda/embl-api-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/embl-api-validator
   :alt:   (downloads)
.. |docker_embl-api-validator| image:: https://quay.io/repository/biocontainers/embl-api-validator/status
   :target: https://quay.io/repository/biocontainers/embl-api-validator
.. _`embl-api-validator/tags`: https://quay.io/repository/biocontainers/embl-api-validator?tab=tags


.. raw:: html

    <script>
        var package = "embl-api-validator";
        var versions = ["1.1.180","1.1.180","1.1.173"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/embl-api-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/embl-api-validator/README.html