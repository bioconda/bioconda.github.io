:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'faqcs'
.. highlight: bash

faqcs
=====

.. conda:recipe:: faqcs
   :replaces_section_title:
   :noindex:

   Quality Control of Next Generation Sequencing Data.

   :homepage: https://github.com/LANL-Bioinformatics/FaQCs
   :license: BSD 3-Clause
   :recipe: /`faqcs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/faqcs/meta.yaml>`_
   :links: biotools: :biotools:`faqcs`

   


.. conda:package:: faqcs

   |downloads_faqcs| |docker_faqcs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10-7</code>,  <code>2.10-6</code>,  <code>2.10-5</code>,  <code>2.10-4</code>,  <code>2.10-3</code>,  <code>2.10-2</code>,  <code>2.10-1</code>,  <code>2.10-0</code>,  <code>2.09-3</code>,  </span></summary>
      

      ``2.10-7``,  ``2.10-6``,  ``2.10-5``,  ``2.10-4``,  ``2.10-3``,  ``2.10-2``,  ``2.10-1``,  ``2.10-0``,  ``2.09-3``,  ``2.09-2``,  ``2.09-1``,  ``2.09-0``,  ``2.08-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends zlib: 
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

      mamba install faqcs

   and update with::

      mamba update faqcs

  To create a new environment, run::

      mamba create --name myenvname faqcs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/faqcs:<tag>

   (see `faqcs/tags`_ for valid values for ``<tag>``)


.. |downloads_faqcs| image:: https://img.shields.io/conda/dn/bioconda/faqcs.svg?style=flat
   :target: https://anaconda.org/bioconda/faqcs
   :alt:   (downloads)
.. |docker_faqcs| image:: https://quay.io/repository/biocontainers/faqcs/status
   :target: https://quay.io/repository/biocontainers/faqcs
.. _`faqcs/tags`: https://quay.io/repository/biocontainers/faqcs?tab=tags


.. raw:: html

    <script>
        var package = "faqcs";
        var versions = ["2.10","2.10","2.10","2.10","2.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/faqcs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/faqcs/README.html