.. title:: Package Recipe 'links'
.. highlight: bash


links
=====

.. conda:recipe:: links
   :replaces_section_title:

   Long Interval Nucleotide K\-mer Scaffolder

   :homepage: http://www.bcgsc.ca/platform/bioinfo/software/links
   :license: GPLv3
   :recipe: /`links <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/links/meta.yaml>`_

   


.. conda:package:: links

   |downloads_links| |docker_links|

   :versions: 1.8.6, 1.8.4, 1.5.2

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`perl`  

   :required~by: |required_by_links|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install links

   and update with::

      conda update links

   or use the docker container::

      docker pull quay.io/repository/biocontainers/links


.. |required_by_links| conda:required_by:: links
.. |downloads_links| image:: https://img.shields.io/conda/dn/bioconda/links.svg?style=flat
   :alt:   (downloads)
.. |docker_links| image:: https://quay.io/repository/biocontainers/links/status
   :target: https://quay.io/repository/biocontainers/links







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/links/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/links/README.html

