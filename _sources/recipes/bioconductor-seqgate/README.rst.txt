:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqgate'
.. highlight: bash

bioconductor-seqgate
====================

.. conda:recipe:: bioconductor-seqgate
   :replaces_section_title:
   :noindex:

   Filtering of Lowly Expressed Features

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SeqGate.html
   :license: GPL (>= 2.0)
   :recipe: /`bioconductor-seqgate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqgate/meta.yaml>`_

   Filtering of lowly expressed features \(e.g. genes\) is a common step before performing statistical analysis\, but an arbitrary threshold is generally chosen. SeqGate implements a method that rationalize this step by the analysis of the distibution of counts in replicate samples. The gate is the threshold above which sequenced features can be considered as confidently quantified.


.. conda:package:: bioconductor-seqgate

   |downloads_bioconductor-seqgate| |docker_bioconductor-seqgate|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-biocmanager: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-seqgate

   and update with::

      mamba update bioconductor-seqgate

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqgate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqgate:<tag>

   (see `bioconductor-seqgate/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqgate| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqgate.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqgate
   :alt:   (downloads)
.. |docker_bioconductor-seqgate| image:: https://quay.io/repository/biocontainers/bioconductor-seqgate/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqgate
.. _`bioconductor-seqgate/tags`: https://quay.io/repository/biocontainers/bioconductor-seqgate?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqgate";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqgate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqgate/README.html