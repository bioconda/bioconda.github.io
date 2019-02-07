.. title:: Package Recipe 'cortex_con'
.. highlight: bash


cortex_con
==========

.. conda:recipe:: cortex_con
   :replaces_section_title:

   cortex\_con \(primary contact Mario Caccamo\) is for consensus genome assembly

   :homepage: http://cortexassembler.sourceforge.net/index.html
   :license: GPL3
   :recipe: /`cortex_con <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cortex_con/meta.yaml>`_
   :links: biotools: :biotools:`cortex`, doi: :doi:`10.1038/ng.1028`

   


.. conda:package:: cortex_con

   |downloads_cortex_con| |docker_cortex_con|

   :versions: 0.04c

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_cortex_con|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cortex_con

   and update with::

      conda update cortex_con

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cortex_con


.. |required_by_cortex_con| conda:required_by:: cortex_con
.. |downloads_cortex_con| image:: https://img.shields.io/conda/dn/bioconda/cortex_con.svg?style=flat
   :alt:   (downloads)
.. |docker_cortex_con| image:: https://quay.io/repository/biocontainers/cortex_con/status
   :target: https://quay.io/repository/biocontainers/cortex_con







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cortex_con/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cortex_con/README.html

