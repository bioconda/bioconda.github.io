:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metaprob'
.. highlight: bash

metaprob
========

.. conda:recipe:: metaprob
   :replaces_section_title:
   :noindex:

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

   :versions:
      
      

      ``2-1``,  ``2-0``

      

   
   :depends boost: ``1.61*``
   :depends eigen: 
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install metaprob

   and update with::

      mamba update metaprob

  To create a new environment, run::

      mamba create --name myenvname metaprob

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metaprob:<tag>

   (see `metaprob/tags`_ for valid values for ``<tag>``)


.. |downloads_metaprob| image:: https://img.shields.io/conda/dn/bioconda/metaprob.svg?style=flat
   :target: https://anaconda.org/bioconda/metaprob
   :alt:   (downloads)
.. |docker_metaprob| image:: https://quay.io/repository/biocontainers/metaprob/status
   :target: https://quay.io/repository/biocontainers/metaprob
.. _`metaprob/tags`: https://quay.io/repository/biocontainers/metaprob?tab=tags


.. raw:: html

    <script>
        var package = "metaprob";
        var versions = ["2","2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metaprob/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metaprob/README.html