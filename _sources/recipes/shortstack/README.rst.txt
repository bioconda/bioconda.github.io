.. title:: Package Recipe 'shortstack'
.. highlight: bash


shortstack
==========

.. conda:recipe:: shortstack
   :replaces_section_title:

   ShortStack\: Comprehensive annotation and quantification of small RNA genes

   :homepage: https://github.com/MikeAxtell/ShortStack
   :license: GPL / GPL-3.0
   :recipe: /`shortstack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortstack/meta.yaml>`_

   


.. conda:package:: shortstack

   |downloads_shortstack| |docker_shortstack|

   :versions: 3.8.5, 3.8.3

   :depends: :conda:package:`bowtie`  :conda:package:`perl` 5.* :conda:package:`samtools` 1.* :conda:package:`viennarna` 2.* 

   :required~by: |required_by_shortstack|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shortstack

   and update with::

      conda update shortstack

   or use the docker container::

      docker pull quay.io/repository/biocontainers/shortstack


.. |required_by_shortstack| conda:required_by:: shortstack
.. |downloads_shortstack| image:: https://img.shields.io/conda/dn/bioconda/shortstack.svg?style=flat
   :alt:   (downloads)
.. |docker_shortstack| image:: https://quay.io/repository/biocontainers/shortstack/status
   :target: https://quay.io/repository/biocontainers/shortstack







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortstack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortstack/README.html

