.. title:: Package Recipe 'scalpel'
.. highlight: bash


scalpel
=======

.. conda:recipe:: scalpel
   :replaces_section_title:

   Sensitive detection of INDELs \(INsertions and DELetions\)

   :homepage: http://scalpel.sourceforge.net/
   :license: MIT
   :recipe: /`scalpel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel/meta.yaml>`_

   


.. conda:package:: scalpel

   |downloads_scalpel| |docker_scalpel|

   :versions: 0.5.4, 0.5.3, 0.5.1

   :depends: :conda:package:`bamtools` >=2.4.1,<2.4.2.0a0 :conda:package:`bcftools`  :conda:package:`perl`  :conda:package:`samtools`  

   :required~by: |required_by_scalpel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scalpel

   and update with::

      conda update scalpel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scalpel


.. |required_by_scalpel| conda:required_by:: scalpel
.. |downloads_scalpel| image:: https://img.shields.io/conda/dn/bioconda/scalpel.svg?style=flat
   :alt:   (downloads)
.. |docker_scalpel| image:: https://quay.io/repository/biocontainers/scalpel/status
   :target: https://quay.io/repository/biocontainers/scalpel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalpel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalpel/README.html

