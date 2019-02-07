.. title:: Package Recipe 'bioconductor-bgafun'
.. highlight: bash


bioconductor-bgafun
===================

.. conda:recipe:: bioconductor-bgafun
   :replaces_section_title:

   A method to identify specifity determining residues in protein families using Between Group Analysis

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/bgafun.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bgafun <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgafun>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgafun/meta.yaml>`_
   :links: biotools: :biotools:`bgafun`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-bgafun

   |downloads_bioconductor-bgafun| |docker_bioconductor-bgafun|

   :versions: 1.44.0, 1.42.0, 1.40.0, 1.38.0

   :depends: :conda:package:`bioconductor-made4` >=1.56.0,<1.57.0 :conda:package:`r-ade4`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-seqinr`  

   :required~by: |required_by_bioconductor-bgafun|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgafun

   and update with::

      conda update bioconductor-bgafun

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-bgafun


.. |required_by_bioconductor-bgafun| conda:required_by:: bioconductor-bgafun
.. |downloads_bioconductor-bgafun| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgafun.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-bgafun| image:: https://quay.io/repository/biocontainers/bioconductor-bgafun/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgafun







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgafun/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgafun/README.html

