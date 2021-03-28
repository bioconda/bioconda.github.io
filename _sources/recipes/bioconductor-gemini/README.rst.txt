:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gemini'
.. highlight: bash

bioconductor-gemini
===================

.. conda:recipe:: bioconductor-gemini
   :replaces_section_title:
   :noindex:

   GEMINI\: Variational inference approach to infer genetic interactions from pairwise CRISPR screens

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/gemini.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-gemini <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gemini/meta.yaml>`_

   GEMINI uses log\-fold changes to model sample\-dependent and independent effects\, and uses a variational Bayes approach to infer these effects. The inferred effects are used to score and identify genetic interactions\, such as lethality and recovery. More details can be found in Zamanighomi et al. 2019 \(in press\).


.. conda:package:: bioconductor-gemini

   |downloads_bioconductor-gemini| |docker_bioconductor-gemini|

   :versions:
      
      

      ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-mixtools: 
   :depends r-pbmcapply: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gemini

   and update with::

      conda update bioconductor-gemini

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gemini:<tag>

   (see `bioconductor-gemini/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gemini| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gemini.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gemini
   :alt:   (downloads)
.. |docker_bioconductor-gemini| image:: https://quay.io/repository/biocontainers/bioconductor-gemini/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gemini
.. _`bioconductor-gemini/tags`: https://quay.io/repository/biocontainers/bioconductor-gemini?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gemini/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gemini/README.html