.. title:: Package Recipe 'bcool'
.. highlight: bash


bcool
=====

.. conda:recipe:: bcool
   :replaces_section_title:

   BCOOL is a read corrector for NGS sequencing data that align reads on a de Bruijn graph. Version described at \(https\:\/\/arxiv.org\/abs\/1711.03336\) presented at RECOMB\-seq 2018

   :homepage: https://github.com/Malfoy/BCOOL
   :license: AGPL-3.0
   :recipe: /`bcool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcool/meta.yaml>`_

   


.. conda:package:: bcool

   |downloads_bcool| |docker_bcool|

   :versions: 1.0.0

   :depends: :conda:package:`bcalm`  :conda:package:`bgreat`  :conda:package:`btrim`  :conda:package:`ntcard`  :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_bcool|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcool

   and update with::

      conda update bcool

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bcool


.. |required_by_bcool| conda:required_by:: bcool
.. |downloads_bcool| image:: https://img.shields.io/conda/dn/bioconda/bcool.svg?style=flat
   :alt:   (downloads)
.. |docker_bcool| image:: https://quay.io/repository/biocontainers/bcool/status
   :target: https://quay.io/repository/biocontainers/bcool







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcool/README.html

