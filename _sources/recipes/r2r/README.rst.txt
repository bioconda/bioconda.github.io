.. title:: Package Recipe 'r2r'
.. highlight: bash


r2r
===

.. conda:recipe:: r2r
   :replaces_section_title:

   software to speed depiction of aesthetic consensus RNA secondary structures

   :homepage: http://breaker.research.yale.edu/R2R/
   :license: GPL-2
   :recipe: /`r2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r/meta.yaml>`_

   


.. conda:package:: r2r

   |downloads_r2r| |docker_r2r|

   :versions: 1.0.5, 1.0.4

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`perl-clone`  

   :required~by: |required_by_r2r|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r2r

   and update with::

      conda update r2r

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r2r


.. |required_by_r2r| conda:required_by:: r2r
.. |downloads_r2r| image:: https://img.shields.io/conda/dn/bioconda/r2r.svg?style=flat
   :alt:   (downloads)
.. |docker_r2r| image:: https://quay.io/repository/biocontainers/r2r/status
   :target: https://quay.io/repository/biocontainers/r2r







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r2r/README.html

