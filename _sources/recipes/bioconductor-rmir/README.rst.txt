.. title:: Package Recipe 'bioconductor-rmir'
.. highlight: bash


bioconductor-rmir
=================

.. conda:recipe:: bioconductor-rmir
   :replaces_section_title:

   Useful functions to merge microRNA and respective targets using differents databases

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RmiR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmir/meta.yaml>`_
   :links: biotools: :biotools:`rmir`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-rmir

   |downloads_bioconductor-rmir| |docker_bioconductor-rmir|

   :versions: 1.38.0, 1.36.0, 1.34.0

   :depends: :conda:package:`bioconductor-rmir.hs.mirna` >=1.0.0,<1.1.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-rsvgtipsdevice`  

   :required~by: |required_by_bioconductor-rmir|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmir

   and update with::

      conda update bioconductor-rmir

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rmir


.. |required_by_bioconductor-rmir| conda:required_by:: bioconductor-rmir
.. |downloads_bioconductor-rmir| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmir.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rmir| image:: https://quay.io/repository/biocontainers/bioconductor-rmir/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmir







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmir/README.html

