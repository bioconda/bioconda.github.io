.. title:: Package Recipe 'bioconductor-genominator'
.. highlight: bash


bioconductor-genominator
========================

.. conda:recipe:: bioconductor-genominator
   :replaces_section_title:

   Tools for storing\, accessing\, analyzing and visualizing genomic data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Genominator.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genominator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genominator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genominator/meta.yaml>`_
   :links: biotools: :biotools:`genominator`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-genominator

   |downloads_bioconductor-genominator| |docker_bioconductor-genominator|

   :versions: 1.36.0, 1.34.0, 1.32.0, 1.30.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomegraphs` >=1.42.0,<1.43.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi` >=0.2-5 :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-genominator|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genominator

   and update with::

      conda update bioconductor-genominator

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-genominator


.. |required_by_bioconductor-genominator| conda:required_by:: bioconductor-genominator
.. |downloads_bioconductor-genominator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genominator.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-genominator| image:: https://quay.io/repository/biocontainers/bioconductor-genominator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genominator







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genominator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genominator/README.html

