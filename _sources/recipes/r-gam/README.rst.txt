:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gam'
.. highlight: bash

r-gam
=====

.. conda:recipe:: r-gam
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-gam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gam/meta.yaml>`_

   


.. conda:package:: r-gam

   |downloads_r-gam| |docker_r-gam|

   :versions: 1.14_4-0, 1.14-0
   
   :depends r-base: 3.4.1*
   
   :depends r-foreach: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-gam

   and update with::

      conda update r-gam

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-gam:<tag>

   (see `r-gam/tags`_ for valid values for ``<tag>``)


.. |downloads_r-gam| image:: https://img.shields.io/conda/dn/bioconda/r-gam.svg?style=flat
   :alt:   (downloads)
.. |docker_r-gam| image:: https://quay.io/repository/biocontainers/r-gam/status
   :target: https://quay.io/repository/biocontainers/r-gam
.. _`r-gam/tags`: https://quay.io/repository/biocontainers/r-gam?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gam/README.html