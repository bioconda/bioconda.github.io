:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genomic_address_service'
.. highlight: bash

genomic_address_service
=======================

.. conda:recipe:: genomic_address_service
   :replaces_section_title:
   :noindex:

   Genomic Address Service\: De novo clustering and cluster address assignment

   :homepage: https://pypi.org/project/genomic-address-service
   :developer docs: https://github.com/phac-nml/genomic_address_service
   :license: Apache-2.0
   :recipe: /`genomic_address_service <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_address_service>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genomic_address_service/meta.yaml>`_

   


.. conda:package:: genomic_address_service

   |downloads_genomic_address_service| |docker_genomic_address_service|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``

      

   
   :depends fastparquet: ``>=2023.4.0``
   :depends numba: 
   :depends numpy: 
   :depends pandas: ``>=2.0.2``
   :depends psutil: 
   :depends pyarrow: ``>=12.0.0``
   :depends pytables: ``>=3.8.0``
   :depends python: ``>=3.8,<4``
   :depends scipy: 
   :depends six: ``>=1.16.0``
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

      mamba install genomic_address_service

   and update with::

      mamba update genomic_address_service

  To create a new environment, run::

      mamba create --name myenvname genomic_address_service

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/genomic_address_service:<tag>

   (see `genomic_address_service/tags`_ for valid values for ``<tag>``)


.. |downloads_genomic_address_service| image:: https://img.shields.io/conda/dn/bioconda/genomic_address_service.svg?style=flat
   :target: https://anaconda.org/bioconda/genomic_address_service
   :alt:   (downloads)
.. |docker_genomic_address_service| image:: https://quay.io/repository/biocontainers/genomic_address_service/status
   :target: https://quay.io/repository/biocontainers/genomic_address_service
.. _`genomic_address_service/tags`: https://quay.io/repository/biocontainers/genomic_address_service?tab=tags


.. raw:: html

    <script>
        var package = "genomic_address_service";
        var versions = ["0.1.5","0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genomic_address_service/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genomic_address_service/README.html