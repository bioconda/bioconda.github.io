:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-eudysbiome'
.. highlight: bash

bioconductor-eudysbiome
=======================

.. conda:recipe:: bioconductor-eudysbiome
   :replaces_section_title:
   :noindex:

   Cartesian plot and contingency test on 16S Microbial data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/eudysbiome.html
   :license: GPL-2
   :recipe: /`bioconductor-eudysbiome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eudysbiome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-eudysbiome/meta.yaml>`_
   :links: biotools: :biotools:`eudysbiome`, doi: :doi:`10.1186/s12918-016-0344-6`

   eudysbiome a package that permits to annotate the differential genera as harmful\/harmless based on their ability to contribute to host diseases \(as indicated in literature\) or unknown based on their ambiguous genus classification. Further\, the package statistically measures the eubiotic \(harmless genera increase or harmful genera decrease\) or dysbiotic\(harmless genera decrease or harmful genera increase\) impact of a given treatment or environmental change on the \(gut\-intestinal\, GI\) microbiome in comparison to the microbiome of the reference condition.


.. conda:package:: bioconductor-eudysbiome

   |downloads_bioconductor-eudysbiome| |docker_bioconductor-eudysbiome|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-plyr: 
   :depends r-r.utils: 
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

      mamba install bioconductor-eudysbiome

   and update with::

      mamba update bioconductor-eudysbiome

  To create a new environment, run::

      mamba create --name myenvname bioconductor-eudysbiome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-eudysbiome:<tag>

   (see `bioconductor-eudysbiome/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-eudysbiome| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-eudysbiome.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-eudysbiome
   :alt:   (downloads)
.. |docker_bioconductor-eudysbiome| image:: https://quay.io/repository/biocontainers/bioconductor-eudysbiome/status
   :target: https://quay.io/repository/biocontainers/bioconductor-eudysbiome
.. _`bioconductor-eudysbiome/tags`: https://quay.io/repository/biocontainers/bioconductor-eudysbiome?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-eudysbiome";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-eudysbiome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-eudysbiome/README.html