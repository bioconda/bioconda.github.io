.. title:: Package Recipe 'bioconductor-icens'
.. highlight: bash


bioconductor-icens
==================

.. conda:recipe:: bioconductor-icens
   :replaces_section_title:

   Many functions for computing the NPMLE for censored and truncated data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Icens.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-icens <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icens>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-icens/meta.yaml>`_
   :links: biotools: :biotools:`icens`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-icens

   |downloads_bioconductor-icens| |docker_bioconductor-icens|

   :versions: 1.54.0, 1.52.0, 1.50.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-icens|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-icens

   and update with::

      conda update bioconductor-icens

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-icens


.. |required_by_bioconductor-icens| conda:required_by:: bioconductor-icens
.. |downloads_bioconductor-icens| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-icens.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-icens| image:: https://quay.io/repository/biocontainers/bioconductor-icens/status
   :target: https://quay.io/repository/biocontainers/bioconductor-icens







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-icens/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-icens/README.html

