:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dpeak'
.. highlight: bash

r-dpeak
=======

.. conda:recipe:: r-dpeak
   :replaces_section_title:
   :noindex:

   This package provides functions for fitting dPeak\, a statistical framework to deconvolve ChIP\-seq peaks.

   :homepage: http://dongjunchung.github.io/dpeak/
   :license: GPL (>= 2)
   :recipe: /`r-dpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dpeak/meta.yaml>`_

   


.. conda:package:: r-dpeak

   |downloads_r-dpeak| |docker_r-dpeak|

   :versions:
      
      

      ``2.0.1-4``,  ``2.0.1-3``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends bioconductor-bsgenome: 
   :depends bioconductor-iranges: 
   :depends libcxx: ``>=11.1.0``
   :depends perl: 
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-mass: 
   :depends r-rcpp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-dpeak

   and update with::

      conda update r-dpeak

   or use the docker container::

      docker pull quay.io/biocontainers/r-dpeak:<tag>

   (see `r-dpeak/tags`_ for valid values for ``<tag>``)


.. |downloads_r-dpeak| image:: https://img.shields.io/conda/dn/bioconda/r-dpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dpeak
   :alt:   (downloads)
.. |docker_r-dpeak| image:: https://quay.io/repository/biocontainers/r-dpeak/status
   :target: https://quay.io/repository/biocontainers/r-dpeak
.. _`r-dpeak/tags`: https://quay.io/repository/biocontainers/r-dpeak?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dpeak/README.html