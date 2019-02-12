.. title:: Package Recipe 'r-scrm'
.. highlight: bash


r-scrm
======

.. conda:recipe:: r-scrm
   :replaces_section_title:

   A coalescent simulator that allows the rapid simulation of biological sequences under neutral models of evolution. Different to other coalescent based simulations\, it has an optional approximation parameter that allows for high accuracy while maintaining a linear run time cost for long sequences. It is optimized for simulating massive data sets as produced by Next\- Generation Sequencing technologies for up to several thousand sequences.

   :homepage: https://github.com/scrm/scrm-r
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-scrm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scrm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scrm/meta.yaml>`_

   


.. conda:package:: r-scrm

   |downloads_r-scrm| |docker_r-scrm|

   :versions: 1.7.2_4, 1.7.2_0, 1.6.0_2

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-rcpp` >=0.11.2 

   :required~by: |required_by_r-scrm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scrm

   and update with::

      conda update r-scrm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-scrm


.. |required_by_r-scrm| conda:required_by:: r-scrm
.. |downloads_r-scrm| image:: https://img.shields.io/conda/dn/bioconda/r-scrm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-scrm| image:: https://quay.io/repository/biocontainers/r-scrm/status
   :target: https://quay.io/repository/biocontainers/r-scrm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scrm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scrm/README.html

