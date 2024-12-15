:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-similarpeak'
.. highlight: bash

bioconductor-similarpeak
========================

.. conda:recipe:: bioconductor-similarpeak
   :replaces_section_title:
   :noindex:

   Metrics to estimate a level of similarity between two ChIP\-Seq profiles

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/similaRpeak.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-similarpeak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-similarpeak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-similarpeak/meta.yaml>`_
   :links: biotools: :biotools:`similarpeak`, doi: :doi:`10.1371/journal.pcbi.1004751`

   This package calculates metrics which quantify the level of similarity between ChIP\-Seq profiles. More specifically\, the package implements six pseudometrics specialized in pattern similarity detection in ChIP\-Seq profiles.


.. conda:package:: bioconductor-similarpeak

   |downloads_bioconductor-similarpeak| |docker_bioconductor-similarpeak|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-r6: ``>=2.0``
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

      mamba install bioconductor-similarpeak

   and update with::

      mamba update bioconductor-similarpeak

  To create a new environment, run::

      mamba create --name myenvname bioconductor-similarpeak

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-similarpeak:<tag>

   (see `bioconductor-similarpeak/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-similarpeak| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-similarpeak.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-similarpeak
   :alt:   (downloads)
.. |docker_bioconductor-similarpeak| image:: https://quay.io/repository/biocontainers/bioconductor-similarpeak/status
   :target: https://quay.io/repository/biocontainers/bioconductor-similarpeak
.. _`bioconductor-similarpeak/tags`: https://quay.io/repository/biocontainers/bioconductor-similarpeak?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-similarpeak";
        var versions = ["1.38.0","1.34.0","1.32.0","1.30.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-similarpeak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-similarpeak/README.html