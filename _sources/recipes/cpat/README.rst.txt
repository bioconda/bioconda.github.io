.. title:: Package Recipe 'cpat'
.. highlight: bash


cpat
====

.. conda:recipe:: cpat
   :replaces_section_title:

   Coding Potential Assessment Tool

   :homepage: http://dldcc-web.brc.bcm.edu/lilab/liguow/CGI/cpat/_build/html/index.html
   :license: GNU
   :recipe: /`cpat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat/meta.yaml>`_

   


.. conda:package:: cpat

   |downloads_cpat| |docker_cpat|

   :versions: 1.2.3, 1.2.2

   :depends: :conda:package:`bx-python`  :conda:package:`pysam`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`r-base`  

   :required~by: |required_by_cpat|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cpat

   and update with::

      conda update cpat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cpat


.. |required_by_cpat| conda:required_by:: cpat
.. |downloads_cpat| image:: https://img.shields.io/conda/dn/bioconda/cpat.svg?style=flat
   :alt:   (downloads)
.. |docker_cpat| image:: https://quay.io/repository/biocontainers/cpat/status
   :target: https://quay.io/repository/biocontainers/cpat







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpat/README.html

