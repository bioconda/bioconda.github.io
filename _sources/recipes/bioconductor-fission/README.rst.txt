:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fission'
.. highlight: bash

bioconductor-fission
====================

.. conda:recipe:: bioconductor-fission
   :replaces_section_title:
   :noindex:

   RangedSummarizedExperiment for time course RNA\-Seq of fission yeast in response to stress\, by Leong et al.\, Nat Commun 2014.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/fission.html
   :license: LGPL
   :recipe: /`bioconductor-fission <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fission>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fission/meta.yaml>`_

   This package provides a RangedSummarizedExperiment object of read counts in genes for a time course RNA\-Seq experiment of fission yeast \(Schizosaccharomyces pombe\) in response to oxidative stress \(1M sorbitol treatment\) at 0\, 15\, 30\, 60\, 120 and 180 mins. The samples are further divided between a wild\-type group and a group with deletion of atf21. The read count matrix was prepared and provided by the author of the study\: Leong HS\, Dawson K\, Wirth C\, Li Y\, Connolly Y\, Smith DL\, Wilkinson CR\, Miller CJ. \"A global non\-coding RNA system modulates fission yeast protein levels in response to stress\". Nat Commun 2014 May 23\;5\:3947. PMID\: 24853205. GEO\: GSE56761.


.. conda:package:: bioconductor-fission

   |downloads_bioconductor-fission| |docker_bioconductor-fission|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-data-packages: ``>=20241103``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends curl: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-fission

   and update with::

      mamba update bioconductor-fission

  To create a new environment, run::

      mamba create --name myenvname bioconductor-fission

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-fission:<tag>

   (see `bioconductor-fission/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-fission| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fission.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fission
   :alt:   (downloads)
.. |docker_bioconductor-fission| image:: https://quay.io/repository/biocontainers/bioconductor-fission/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fission
.. _`bioconductor-fission/tags`: https://quay.io/repository/biocontainers/bioconductor-fission?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fission";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fission/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fission/README.html