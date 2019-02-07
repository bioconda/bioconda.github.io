.. title:: Package Recipe 'pureclip'
.. highlight: bash


pureclip
========

.. conda:recipe:: pureclip
   :replaces_section_title:

   PureCLIP is a tool to detect protein\-RNA interaction footprints from single\-nucleotide CLIP\-seq data\, such as iCLIP and eCLIP.

   :homepage: https://github.com/skrakau/PureCLIP
   :license: GPLv3
   :recipe: /`pureclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1364-2`

   


.. conda:package:: pureclip

   |downloads_pureclip| |docker_pureclip|

   :versions: 1.2.0, 1.1.2, 1.1.1, 1.0.4, 1.0.3, 1.0.2

   :depends: :conda:package:`bedtools`  :conda:package:`meme`  

   :required~by: |required_by_pureclip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pureclip

   and update with::

      conda update pureclip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pureclip


.. |required_by_pureclip| conda:required_by:: pureclip
.. |downloads_pureclip| image:: https://img.shields.io/conda/dn/bioconda/pureclip.svg?style=flat
   :alt:   (downloads)
.. |docker_pureclip| image:: https://quay.io/repository/biocontainers/pureclip/status
   :target: https://quay.io/repository/biocontainers/pureclip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pureclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pureclip/README.html

