.. title:: Package Recipe 'r-george'
.. highlight: bash


r-george
========

.. conda:recipe:: r-george
   :replaces_section_title:

   geoRge\, a computational tool for stable isotope labelling detection in LC\/MS\-based untargeted metabolomics

   :homepage: https://github.com/jcapelladesto/geoRge/README.md
   :license: GPL (>= 2)
   :recipe: /`r-george <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-george/meta.yaml>`_

   


.. conda:package:: r-george

   |downloads_r-george| |docker_r-george|

   :versions: 1.0.1

   :depends: :conda:package:`bioconductor-mzr`  :conda:package:`bioconductor-xcms`  :conda:package:`r-base` 3.3.2* :conda:package:`r-optparse`  

   :required~by: |required_by_r-george|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-george

   and update with::

      conda update r-george

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-george


.. |required_by_r-george| conda:required_by:: r-george
.. |downloads_r-george| image:: https://img.shields.io/conda/dn/bioconda/r-george.svg?style=flat
   :alt:   (downloads)
.. |docker_r-george| image:: https://quay.io/repository/biocontainers/r-george/status
   :target: https://quay.io/repository/biocontainers/r-george







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-george/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-george/README.html

