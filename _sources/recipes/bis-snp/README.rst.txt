.. title:: Package Recipe 'bis-snp'
.. highlight: bash


bis-snp
=======

.. conda:recipe:: bis-snp
   :replaces_section_title:

   Bisulfite\-seq\/NOMe\-seq SNPs \& cytosine methylation caller

   :homepage: http://people.csail.mit.edu/dnaase/bissnp2011/
   :license: MIT
   :recipe: /`bis-snp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bis-snp/meta.yaml>`_

   


.. conda:package:: bis-snp

   |downloads_bis-snp| |docker_bis-snp|

   :versions: 1.0.1, 0.82.2

   :depends: :conda:package:`openjdk` >=8.0.0 

   :required~by: |required_by_bis-snp|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bis-snp

   and update with::

      conda update bis-snp

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bis-snp


.. |required_by_bis-snp| conda:required_by:: bis-snp
.. |downloads_bis-snp| image:: https://img.shields.io/conda/dn/bioconda/bis-snp.svg?style=flat
   :alt:   (downloads)
.. |docker_bis-snp| image:: https://quay.io/repository/biocontainers/bis-snp/status
   :target: https://quay.io/repository/biocontainers/bis-snp







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bis-snp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bis-snp/README.html

