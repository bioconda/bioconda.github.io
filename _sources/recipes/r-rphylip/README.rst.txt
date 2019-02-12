:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-rphylip'
.. highlight: bash

r-rphylip
=========

.. conda:recipe:: r-rphylip
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-rphylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-rphylip/meta.yaml>`_

   


.. conda:package:: r-rphylip

   |downloads_r-rphylip| |docker_r-rphylip|

   :versions: 0.1_23-1, 0.1_23-0
   
   :depends phylip: >=3.696
   
   :depends r-ape: >=3.0_10
   
   :depends r-base: 3.3.2*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-rphylip

   and update with::

      conda update r-rphylip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-rphylip:<tag>

   (see `r-rphylip/tags`_ for valid values for ``<tag>``)


.. |downloads_r-rphylip| image:: https://img.shields.io/conda/dn/bioconda/r-rphylip.svg?style=flat
   :alt:   (downloads)
.. |docker_r-rphylip| image:: https://quay.io/repository/biocontainers/r-rphylip/status
   :target: https://quay.io/repository/biocontainers/r-rphylip
.. _`r-rphylip/tags`: https://quay.io/repository/biocontainers/r-rphylip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-rphylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-rphylip/README.html