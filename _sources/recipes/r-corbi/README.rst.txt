.. title:: Package Recipe 'r-corbi'
.. highlight: bash


r-corbi
=======

.. conda:recipe:: r-corbi
   :replaces_section_title:

   Provides a bundle of basic and fundamental bioinformatics tools\, such as network querying and alignment\, subnetwork extraction and search\, network biomarker identification.

   :homepage: https://github.com/wulingyun/Corbi
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-corbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-corbi/meta.yaml>`_

   


.. conda:package:: r-corbi

   |downloads_r-corbi| |docker_r-corbi|

   :versions: 0.4_2

   :depends: :conda:package:`libgfortran` >=3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-crf`  :conda:package:`r-matrix`  :conda:package:`r-mpmi`  

   :required~by: |required_by_r-corbi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-corbi

   and update with::

      conda update r-corbi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-corbi


.. |required_by_r-corbi| conda:required_by:: r-corbi
.. |downloads_r-corbi| image:: https://img.shields.io/conda/dn/bioconda/r-corbi.svg?style=flat
   :alt:   (downloads)
.. |docker_r-corbi| image:: https://quay.io/repository/biocontainers/r-corbi/status
   :target: https://quay.io/repository/biocontainers/r-corbi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-corbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-corbi/README.html

