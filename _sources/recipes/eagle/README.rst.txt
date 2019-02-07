.. title:: Package Recipe 'eagle'
.. highlight: bash


eagle
=====

.. conda:recipe:: eagle
   :replaces_section_title:

   Eagle is a webtool for genome variants and snp analysis

   :homepage: https://bitbucket.org/christopherschroeder/eagle
   :license: MIT / MIT License
   :recipe: /`eagle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eagle/meta.yaml>`_

   


.. conda:package:: eagle

   |downloads_eagle| |docker_eagle|

   :versions: 0.9.3.3, 0.9.0

   :depends: :conda:package:`flask`  :conda:package:`h5py`  :conda:package:`numpy`  :conda:package:`pyliftover`  :conda:package:`python` 3.5* :conda:package:`pyvcf`  :conda:package:`scipy`  

   :required~by: |required_by_eagle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install eagle

   and update with::

      conda update eagle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/eagle


.. |required_by_eagle| conda:required_by:: eagle
.. |downloads_eagle| image:: https://img.shields.io/conda/dn/bioconda/eagle.svg?style=flat
   :alt:   (downloads)
.. |docker_eagle| image:: https://quay.io/repository/biocontainers/eagle/status
   :target: https://quay.io/repository/biocontainers/eagle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eagle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eagle/README.html

