:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-purbayes'
.. highlight: bash

r-purbayes
==========

.. conda:recipe:: r-purbayes
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-purbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-purbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-purbayes/meta.yaml>`_

   


.. conda:package:: r-purbayes

   |downloads_r-purbayes| |docker_r-purbayes|

   :versions: 1.3-0
   
   :depends r-base: 3.4.1*
   :depends r-rjags: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-purbayes

   and update with::

      conda update r-purbayes

   or use the docker container::

      docker pull quay.io/biocontainers/r-purbayes:<tag>

   (see `r-purbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_r-purbayes| image:: https://img.shields.io/conda/dn/bioconda/r-purbayes.svg?style=flat
   :alt:   (downloads)
.. |docker_r-purbayes| image:: https://quay.io/repository/biocontainers/r-purbayes/status
   :target: https://quay.io/repository/biocontainers/r-purbayes
.. _`r-purbayes/tags`: https://quay.io/repository/biocontainers/r-purbayes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-purbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-purbayes/README.html