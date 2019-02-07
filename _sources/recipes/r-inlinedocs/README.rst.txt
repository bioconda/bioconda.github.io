.. title:: Package Recipe 'r-inlinedocs'
.. highlight: bash


r-inlinedocs
============

.. conda:recipe:: r-inlinedocs
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-inlinedocs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-inlinedocs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-inlinedocs/meta.yaml>`_

   


.. conda:package:: r-inlinedocs

   |downloads_r-inlinedocs| |docker_r-inlinedocs|

   :versions: 2013.9.3

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 

   :required~by: |required_by_r-inlinedocs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-inlinedocs

   and update with::

      conda update r-inlinedocs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-inlinedocs


.. |required_by_r-inlinedocs| conda:required_by:: r-inlinedocs
.. |downloads_r-inlinedocs| image:: https://img.shields.io/conda/dn/bioconda/r-inlinedocs.svg?style=flat
   :alt:   (downloads)
.. |docker_r-inlinedocs| image:: https://quay.io/repository/biocontainers/r-inlinedocs/status
   :target: https://quay.io/repository/biocontainers/r-inlinedocs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-inlinedocs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-inlinedocs/README.html

