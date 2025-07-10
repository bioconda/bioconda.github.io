:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barcode-validator'
.. highlight: bash

barcode-validator
=================

.. conda:recipe:: barcode-validator
   :replaces_section_title:
   :noindex:

   A python package for structural and taxonomic validation of DNA barcode data

   :homepage: https://github.com/naturalis/barcode_validator
   :license: APACHE / Apache-2.0
   :recipe: /`barcode-validator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode-validator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barcode-validator/meta.yaml>`_

   


.. conda:package:: barcode-validator

   |downloads_barcode-validator| |docker_barcode-validator|

   :versions:
      
      

      ``2.0.8-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends bioblend: 
   :depends biopython: 
   :depends ete4: 
   :depends nbitk: 
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: 
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

      mamba install barcode-validator

   and update with::

      mamba update barcode-validator

  To create a new environment, run::

      mamba create --name myenvname barcode-validator

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/barcode-validator:<tag>

   (see `barcode-validator/tags`_ for valid values for ``<tag>``)


.. |downloads_barcode-validator| image:: https://img.shields.io/conda/dn/bioconda/barcode-validator.svg?style=flat
   :target: https://anaconda.org/bioconda/barcode-validator
   :alt:   (downloads)
.. |docker_barcode-validator| image:: https://quay.io/repository/biocontainers/barcode-validator/status
   :target: https://quay.io/repository/biocontainers/barcode-validator
.. _`barcode-validator/tags`: https://quay.io/repository/biocontainers/barcode-validator?tab=tags


.. raw:: html

    <script>
        var package = "barcode-validator";
        var versions = ["2.0.8","2.0.7","2.0.6","2.0.5","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barcode-validator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barcode-validator/README.html