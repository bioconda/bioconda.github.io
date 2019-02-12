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

   :versions: 0.1.3, 0.1.2a, 0.1.1, 0.1.0a

   :depends: :conda:package:`arvados-cwl-runner` >=1.3.0.20181218191458 :conda:package:`bcbio-nextgen` >=1.1.3 :conda:package:`boto3`  :conda:package:`cachecontrol` 0.11.7 :conda:package:`cromwell` >=0.36 :conda:package:`dx-cwl` >=0.1.0a20180820 :conda:package:`dxpy`  :conda:package:`google-cloud-sdk`  :conda:package:`ipyparallel` >=6.0.2 :conda:package:`nodejs`  :conda:package:`nose`  :conda:package:`pathlib2` 2.3.2 :conda:package:`pysam` >=0.15.2 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`python-dateutil` >=2.5.0 :conda:package:`rabix-bunny` >=1.0.4 :conda:package:`ruamel.yaml` >=0.13.0 :conda:package:`sevenbridges-python` >=0.17.5 :conda:package:`six`  :conda:package:`synapseclient`  

   :required~by: |required_by_bcbio-nextgen-vm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-nextgen-vm

   and update with::

      conda update bcbio-nextgen-vm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcbio-nextgen-vm


.. |required_by_bcbio-nextgen-vm| conda:required_by:: bcbio-nextgen-vm
.. |downloads_bcbio-nextgen-vm| image:: https://img.shields.io/conda/dn/bioconda/bcbio-nextgen-vm.svg?style=flat
   :alt:   (downloads)
.. |docker_bcbio-nextgen-vm| image:: https://quay.io/repository/biocontainers/bcbio-nextgen-vm/status
   :target: https://quay.io/repository/biocontainers/bcbio-nextgen-vm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-nextgen-vm/README.html

