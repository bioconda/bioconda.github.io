:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-nextgen-vm'
.. highlight: bash

bcbio-nextgen-vm
================

.. conda:recipe:: bcbio-nextgen-vm
   :replaces_section_title:

   Run bcbio\-nextgen genomic sequencing analyses using isolated containers and virtual machines

   :homepage: https://github.com/chapmanb/bcbio-nextgen-vm
   :license: MIT
   :recipe: /`bcbio-nextgen-vm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen-vm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-nextgen-vm/meta.yaml>`_

   


.. conda:package:: bcbio-nextgen-vm

   |downloads_bcbio-nextgen-vm| |docker_bcbio-nextgen-vm|

   :versions: 0.1.3-1, 0.1.2a-1, 0.1.1-1, 0.1.1-0, 0.1.0a-136, 0.1.0a-135, 0.1.0a-134, 0.1.0a-133, 0.1.0a-132, 0.1.0a-131, 0.1.0a-130, 0.1.0a-129, 0.1.0a-128, 0.1.0a-127, 0.1.0a-126, 0.1.0a-125, 0.1.0a-124, 0.1.0a-123, 0.1.0a-122, 0.1.0a-121, 0.1.0a-120, 0.1.0a-119, 0.1.0a-118, 0.1.0a-117, 0.1.0a-116, 0.1.0a-115, 0.1.0a-114, 0.1.0a-113, 0.1.0a-112, 0.1.0a-111, 0.1.0a-110, 0.1.0a-109, 0.1.0a-108, 0.1.0a-107, 0.1.0a-106, 0.1.0a-105, 0.1.0a-104, 0.1.0a-103, 0.1.0a-102, 0.1.0a-101, 0.1.0a-100, 0.1.0a-99, 0.1.0a-98, 0.1.0a-97, 0.1.0a-96, 0.1.0a-95, 0.1.0a-94, 0.1.0a-93, 0.1.0a-92, 0.1.0a-91, 0.1.0a-90, 0.1.0a-89, 0.1.0a-88, 0.1.0a-87, 0.1.0a-86, 0.1.0a-85, 0.1.0a-84, 0.1.0a-83, 0.1.0a-82, 0.1.0a-81, 0.1.0a-80, 0.1.0a-79, 0.1.0a-78, 0.1.0a-77, 0.1.0a-76, 0.1.0a-75, 0.1.0a-74, 0.1.0a-73, 0.1.0a-72, 0.1.0a-71, 0.1.0a-70, 0.1.0a-69
   
   :depends arvados-cwl-runner: >=1.3.0.20181218191458
   
   :depends bcbio-nextgen: >=1.1.3
   
   :depends boto3: 
   
   :depends cachecontrol: 0.11.7
   
   :depends cromwell: >=0.36
   
   :depends dx-cwl: >=0.1.0a20180820
   
   :depends dxpy: 
   
   :depends google-cloud-sdk: 
   
   :depends ipyparallel: >=6.0.2
   
   :depends nodejs: 
   
   :depends nose: 
   
   :depends pathlib2: 2.3.2
   
   :depends pysam: >=0.15.2
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-dateutil: >=2.5.0
   
   :depends rabix-bunny: >=1.0.4
   
   :depends ruamel.yaml: >=0.13.0
   
   :depends sevenbridges-python: >=0.17.5
   
   :depends six: 
   
   :depends synapseclient: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-nextgen-vm

   and update with::

      conda update bcbio-nextgen-vm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbio-nextgen-vm:<tag>

   (see `bcbio-nextgen-vm/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-nextgen-vm| image:: https://img.shields.io/conda/dn/bioconda/bcbio-nextgen-vm.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio-nextgen-vm| image:: https://quay.io/repository/biocontainers/bcbio-nextgen-vm/status
   :target: https://quay.io/repository/biocontainers/bcbio-nextgen-vm
.. _`bcbio-nextgen-vm/tags`: https://quay.io/repository/biocontainers/bcbio-nextgen-vm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html