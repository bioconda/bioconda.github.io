.. title:: Package Recipe 'sccaller'
.. highlight: bash


sccaller
========

.. conda:recipe:: sccaller
   :replaces_section_title:

   Dong X et al. Accurate identification of single\-nucleotide variants in whole\-genome\-amplified single cells. Nat Methods. 2017 May\;14\(5\)\:491\-493. doi\: 10.1038\/nmeth.4227

   :homepage: https://github.com/biosinodx/SCcaller
   :license: GPL-3
   :recipe: /`sccaller <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sccaller/meta.yaml>`_

   


.. conda:package:: sccaller

   |downloads_sccaller| |docker_sccaller|

   :versions: 1.21, 1.2

   :depends: :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools` >=1.3 

   :required~by: |required_by_sccaller|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sccaller

   and update with::

      conda update sccaller

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sccaller


.. |required_by_sccaller| conda:required_by:: sccaller
.. |downloads_sccaller| image:: https://img.shields.io/conda/dn/bioconda/sccaller.svg?style=flat
   :alt:   (downloads)
.. |docker_sccaller| image:: https://quay.io/repository/biocontainers/sccaller/status
   :target: https://quay.io/repository/biocontainers/sccaller







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sccaller/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sccaller/README.html

