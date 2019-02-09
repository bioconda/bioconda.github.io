.. title:: Package Recipe 'meryl'
.. highlight: bash


meryl
=====

.. conda:recipe:: meryl
   :replaces_section_title:

   meryl is a multi\-threaded\, multi\-process\, out\-of\-core k\-mer counter

   :homepage: http://kmer.sourceforge.net/wiki/index.php/Getting_Started_with_Meryl
   :license: GPL
   :recipe: /`meryl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/meryl/meta.yaml>`_

   


.. conda:package:: meryl

   |downloads_meryl| |docker_meryl|

   :versions: 2013

   :depends: 

   :required~by: |required_by_meryl|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install meryl

   and update with::

      conda update meryl

   or use the docker container::

      docker pull quay.io/repository/biocontainers/meryl


.. |required_by_meryl| conda:required_by:: meryl
.. |downloads_meryl| image:: https://img.shields.io/conda/dn/bioconda/meryl.svg?style=flat
   :alt:   (downloads)
.. |docker_meryl| image:: https://quay.io/repository/biocontainers/meryl/status
   :target: https://quay.io/repository/biocontainers/meryl







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/meryl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/meryl/README.html

