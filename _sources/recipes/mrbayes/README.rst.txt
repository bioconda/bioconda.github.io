.. title:: Package Recipe 'mrbayes'
.. highlight: bash


mrbayes
=======

.. conda:recipe:: mrbayes
   :replaces_section_title:

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

   :versions: 3.2.6

   :depends: :conda:package:`beagle-lib`  :conda:package:`openmpi`  :conda:package:`readline` 6.* 

   :required~by: |required_by_mrbayes|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mrbayes

   and update with::

      conda update mrbayes

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mrbayes


.. |required_by_mrbayes| conda:required_by:: mrbayes
.. |downloads_mrbayes| image:: https://img.shields.io/conda/dn/bioconda/mrbayes.svg?style=flat
   :alt:   (downloads)
.. |docker_mrbayes| image:: https://quay.io/repository/biocontainers/mrbayes/status
   :target: https://quay.io/repository/biocontainers/mrbayes







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mrbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mrbayes/README.html

