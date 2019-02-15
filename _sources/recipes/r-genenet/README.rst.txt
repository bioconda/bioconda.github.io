:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-genenet'
.. highlight: bash

r-genenet
=========

.. conda:recipe:: r-genenet
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-genenet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genenet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-genenet/meta.yaml>`_

   


.. conda:package:: r-genenet

   |downloads_r-genenet| |docker_r-genenet|

   :versions: 1.2.13-0
   
   :depends r-base: 3.3.2*
   
   :depends r-corpcor: >=1.6.8
   
   :depends r-fdrtool: >=1.2.15
   
   :depends r-longitudinal: >=1.1.12
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-genenet

   and update with::

      conda update r-genenet

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-genenet:<tag>

   (see `r-genenet/tags`_ for valid values for ``<tag>``)


.. |downloads_r-genenet| image:: https://img.shields.io/conda/dn/bioconda/r-genenet.svg?style=flat
   :alt:   (downloads)
.. |docker_r-genenet| image:: https://quay.io/repository/biocontainers/r-genenet/status
   :target: https://quay.io/repository/biocontainers/r-genenet
.. _`r-genenet/tags`: https://quay.io/repository/biocontainers/r-genenet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-genenet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-genenet/README.html