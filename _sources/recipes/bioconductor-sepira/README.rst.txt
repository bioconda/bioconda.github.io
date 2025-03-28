:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sepira'
.. highlight: bash

bioconductor-sepira
===================

.. conda:recipe:: bioconductor-sepira
   :replaces_section_title:
   :noindex:

   Systems EPigenomics Inference of Regulatory Activity

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SEPIRA.html
   :license: GPL-3
   :recipe: /`bioconductor-sepira <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepira>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sepira/meta.yaml>`_

   SEPIRA \(Systems EPigenomics Inference of Regulatory Activity\) is an algorithm that infers sample\-specific transcription factor activity from the genome\-wide expression or DNA methylation profile of the sample.


.. conda:package:: bioconductor-sepira

   |downloads_bioconductor-sepira| |docker_bioconductor-sepira|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: ``>=1.6.9``
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

      mamba install bioconductor-sepira

   and update with::

      mamba update bioconductor-sepira

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sepira

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sepira:<tag>

   (see `bioconductor-sepira/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sepira| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sepira.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sepira
   :alt:   (downloads)
.. |docker_bioconductor-sepira| image:: https://quay.io/repository/biocontainers/bioconductor-sepira/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sepira
.. _`bioconductor-sepira/tags`: https://quay.io/repository/biocontainers/bioconductor-sepira?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sepira";
        var versions = ["1.20.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sepira/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sepira/README.html