.. title:: Package Recipe 'metaprob'
.. highlight: bash


metaprob
========

.. conda:recipe:: metaprob
   :replaces_section_title:

   assembly\-assisted tool for un\-supervised metagenomic binning

   :homepage: https://bitbucket.org/samu661/metaprob/
   :license: copyright
   :recipe: /`metaprob <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprob>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metaprob/meta.yaml>`_

   MetaProb is a novel assembly\-assisted tool for un\-supervised metagenomic
   binning. The novelty of MetaProb derives from solving a few important
   problems\: how to divide reads into groups of independent reads\, so that
   l\-mer frequencies are not overestimated\; how to convert l\-mer counts into
   probabilistic sequence signatures\, that will correct for variable
   distribution of l\-mers\, and for unbalanced groups of reads\, in order to
   produce better estimates of the underlying genome statistic. We show that
   MetaProb is effective for both simulated and real datasets. It can
   accurately \(with F\-measures of 87 for short reads and 97 long reads\) and
   efficiently bin short and long reads with varying abundance ratios.



.. conda:package:: metaprob

   |downloads_metaprob| |docker_metaprob|

   :versions: 2

   :depends: :conda:package:`boost` 1.60* :conda:package:`eigen`  :conda:package:`libgcc`  

   :required~by: |required_by_metaprob|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metaprob

   and update with::

      conda update metaprob

   or use the docker container::

      docker pull quay.io/repository/biocontainers/metaprob


.. |required_by_metaprob| conda:required_by:: metaprob
.. |downloads_metaprob| image:: https://img.shields.io/conda/dn/bioconda/metaprob.svg?style=flat
   :alt:   (downloads)
.. |docker_metaprob| image:: https://quay.io/repository/biocontainers/metaprob/status
   :target: https://quay.io/repository/biocontainers/metaprob







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaprob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaprob/README.html

