:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-precrec'
.. highlight: bash

r-precrec
=========

.. conda:recipe:: r-precrec
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-precrec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-precrec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-precrec/meta.yaml>`_

   


.. conda:package:: r-precrec

   |downloads_r-precrec| |docker_r-precrec|

   :versions: 0.9.1-0
   
   :depends libgcc: 
   
   :depends r-assertthat: >=0.1
   
   :depends r-base: 3.3.2*
   
   :depends r-data.table: >=1.10.4
   
   :depends r-ggplot2: >=2.1.0
   
   :depends r-gridextra: >=2.0.0
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-precrec

   and update with::

      conda update r-precrec

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-precrec:<tag>

   (see `r-precrec/tags`_ for valid values for ``<tag>``)


.. |downloads_r-precrec| image:: https://img.shields.io/conda/dn/bioconda/r-precrec.svg?style=flat
   :alt:   (downloads)
.. |docker_r-precrec| image:: https://quay.io/repository/biocontainers/r-precrec/status
   :target: https://quay.io/repository/biocontainers/r-precrec
.. _`r-precrec/tags`: https://quay.io/repository/biocontainers/r-precrec?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-precrec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-precrec/README.html