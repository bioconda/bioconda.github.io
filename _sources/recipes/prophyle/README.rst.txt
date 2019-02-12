.. title:: Package Recipe 'prophyle'
.. highlight: bash


prophyle
========

.. conda:recipe:: prophyle
   :replaces_section_title:

   ProPhyle is an accurate\, resource\-frugal and deterministic phylogeny\-based metagenomic classifier.

   :homepage: https://github.com/karel-brinda/prophyle
   :license: MIT
   :recipe: /`prophyle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophyle/meta.yaml>`_

   


.. conda:package:: prophyle

   |downloads_prophyle| |docker_prophyle|

   :versions: 0.3.1.0, 0.3.0.3, 0.3.0.2, 0.3.0.0, 0.2.1.3, 0.2.1.2, 0.2.1.0, 0.2.0.3, 0.2.0.2, 0.2.0, 0.1.0.38, 0.1.0.35, 0.1.0.29

   :depends: :conda:package:`bitarray`  :conda:package:`ete3`  :conda:package:`libgcc`  :conda:package:`psutil`  :conda:package:`pysam`  :conda:package:`python` 3.5* :conda:package:`samtools`  :conda:package:`scipy`  :conda:package:`wheel`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_prophyle|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophyle

   and update with::

      conda update prophyle

   or use the docker container::

      docker pull quay.io/repository/biocontainers/prophyle


.. |required_by_prophyle| conda:required_by:: prophyle
.. |downloads_prophyle| image:: https://img.shields.io/conda/dn/bioconda/prophyle.svg?style=flat
   :alt:   (downloads)
.. |docker_prophyle| image:: https://quay.io/repository/biocontainers/prophyle/status
   :target: https://quay.io/repository/biocontainers/prophyle







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophyle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophyle/README.html

