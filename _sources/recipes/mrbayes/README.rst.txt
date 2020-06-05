:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mrbayes'
.. highlight: bash

mrbayes
=======

.. conda:recipe:: mrbayes
   :replaces_section_title:
   :noindex:

   Bayesian Inference of Phylogeny

   :homepage: http://mrbayes.sourceforge.net
   :license: GPL / GPLv3
   :recipe: /`mrbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mrbayes/meta.yaml>`_
   :links: biotools: :biotools:`mrbayes`

   MrBayes is a program for Bayesian inference and model choice across a wide
   range of phylogenetic and evolutionary models. MrBayes uses Markov chain
   Monte Carlo \(MCMC\) methods to estimate the posterior distribution of model
   parameters.



.. conda:package:: mrbayes

   |downloads_mrbayes| |docker_mrbayes|

   :versions:
      
      

      ``3.2.7-0``,  ``3.2.7a-0``,  ``3.2.6-0``

      

   
   :depends beagle-lib: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends ncurses: ``>=6.1,<6.2.0a0``
   :depends openmpi: ``>=4.0.2,<4.1.0a0``
   :depends readline: ``>=8.0,<9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mrbayes

   and update with::

      conda update mrbayes

   or use the docker container::

      docker pull quay.io/biocontainers/mrbayes:<tag>

   (see `mrbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_mrbayes| image:: https://img.shields.io/conda/dn/bioconda/mrbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/mrbayes
   :alt:   (downloads)
.. |docker_mrbayes| image:: https://quay.io/repository/biocontainers/mrbayes/status
   :target: https://quay.io/repository/biocontainers/mrbayes
.. _`mrbayes/tags`: https://quay.io/repository/biocontainers/mrbayes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes/README.html