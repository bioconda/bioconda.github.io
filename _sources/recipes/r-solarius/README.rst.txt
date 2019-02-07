.. title:: Package Recipe 'r-solarius'
.. highlight: bash


r-solarius
==========

.. conda:recipe:: r-solarius
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-solarius <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-solarius>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-solarius/meta.yaml>`_

   


.. conda:package:: r-solarius

   |downloads_r-solarius| |docker_r-solarius|

   :versions: 0.3.0.2

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-plyr` >=1.8.1 

   :required~by: |required_by_r-solarius|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-solarius

   and update with::

      conda update r-solarius

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-solarius


.. |required_by_r-solarius| conda:required_by:: r-solarius
.. |downloads_r-solarius| image:: https://img.shields.io/conda/dn/bioconda/r-solarius.svg?style=flat
   :alt:   (downloads)
.. |docker_r-solarius| image:: https://quay.io/repository/biocontainers/r-solarius/status
   :target: https://quay.io/repository/biocontainers/r-solarius







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-solarius/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-solarius/README.html

