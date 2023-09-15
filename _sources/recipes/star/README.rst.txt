:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'star'
.. highlight: bash

star
====

.. conda:recipe:: star
   :replaces_section_title:
   :noindex:

   An RNA\-seq read aligner.

   :homepage: https://github.com/alexdobin/STAR
   :license: GPLv3
   :recipe: /`star <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/star/meta.yaml>`_
   :links: biotools: :biotools:`star`, usegalaxy-eu: :usegalaxy-eu:`rna_starsolo`, usegalaxy-eu: :usegalaxy-eu:`rna_star`

   


.. conda:package:: star

   |downloads_star| |docker_star|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.11a-0</code>,  <code>2.7.10b-1</code>,  <code>2.7.10b-0</code>,  <code>2.7.10a-0</code>,  <code>2.7.9a-0</code>,  <code>2.7.8a-1</code>,  <code>2.7.8a-0</code>,  <code>2.7.7a-0</code>,  <code>2.7.6a-0</code>,  </span></summary>
      

      ``2.7.11a-0``,  ``2.7.10b-1``,  ``2.7.10b-0``,  ``2.7.10a-0``,  ``2.7.9a-0``,  ``2.7.8a-1``,  ``2.7.8a-0``,  ``2.7.7a-0``,  ``2.7.6a-0``,  ``2.7.5c-0``,  ``2.7.5b-0``,  ``2.7.5a-0``,  ``2.7.4a-0``,  ``2.7.3a-0``,  ``2.7.2c-0``,  ``2.7.2b-0``,  ``2.7.2a-0``,  ``2.7.1a-0``,  ``2.7.0f-0``,  ``2.7.0e-0``,  ``2.7.0d-0``,  ``2.7.0b-0``,  ``2.6.1d-1``,  ``2.6.1d-0``,  ``2.6.1b-0``,  ``2.6.1a-1``,  ``2.6.0c-3``,  ``2.6.0c-2``,  ``2.6.0c-1``,  ``2.6.0c-0``,  ``2.6.0b-0``,  ``2.5.4a-0``,  ``2.5.3a-0``,  ``2.5.2b-0``,  ``2.5.2a-0``,  ``2.5.1b-0``,  ``2.5.0c-0``,  ``2.5.0b-0``,  ``2.5.0a-0``,  ``2.4.2a-0``,  ``2.4.0j-2``,  ``2.4.0j-1``,  ``2.4.0j-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install star

   and update with::

      mamba update star

  To create a new environment, run::

      mamba create --name myenvname star

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/star:<tag>

   (see `star/tags`_ for valid values for ``<tag>``)


.. |downloads_star| image:: https://img.shields.io/conda/dn/bioconda/star.svg?style=flat
   :target: https://anaconda.org/bioconda/star
   :alt:   (downloads)
.. |docker_star| image:: https://quay.io/repository/biocontainers/star/status
   :target: https://quay.io/repository/biocontainers/star
.. _`star/tags`: https://quay.io/repository/biocontainers/star?tab=tags


.. raw:: html

    <script>
        var package = "star";
        var versions = ["2.7.11a","2.7.10b","2.7.10b","2.7.10a","2.7.9a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/star/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/star/README.html