:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clustalw'
.. highlight: bash

clustalw
========

.. conda:recipe:: clustalw
   :replaces_section_title:
   :noindex:

   ClustalW2 is a general purpose multiple sequence alignment program for DNA or proteins.

   :homepage: http://www.clustal.org/clustal2
   :documentation: http://www.clustal.org/download/clustalw_help.txt
   
   :license: LGPL / LGPL-3.0-or-later
   :recipe: /`clustalw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clustalw/meta.yaml>`_
   :links: biotools: :biotools:`clustalw_biolib`, biotools: :biotools:`ClustalW2_Phylogeny_API_EBI`, biotools: :biotools:`clustalw2_phylogeny_ebi`, biotools: :biotools:`clustalw2_ebi`, doi: :doi:`10.1093/bioinformatics/btm404`, doi: :doi:`10.1093/nar/22.22.4673`, usegalaxy-eu: :usegalaxy-eu:`clustalw`

   


.. conda:package:: clustalw

   |downloads_clustalw| |docker_clustalw|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1-12</code>,  <code>2.1-11</code>,  <code>2.1-10</code>,  <code>2.1-9</code>,  <code>2.1-8</code>,  <code>2.1-7</code>,  <code>2.1-6</code>,  <code>2.1-5</code>,  <code>2.1-4</code>,  </span></summary>
      

      ``2.1-12``,  ``2.1-11``,  ``2.1-10``,  ``2.1-9``,  ``2.1-8``,  ``2.1-7``,  ``2.1-6``,  ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install clustalw

   and update with::

      mamba update clustalw

  To create a new environment, run::

      mamba create --name myenvname clustalw

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clustalw:<tag>

   (see `clustalw/tags`_ for valid values for ``<tag>``)


.. |downloads_clustalw| image:: https://img.shields.io/conda/dn/bioconda/clustalw.svg?style=flat
   :target: https://anaconda.org/bioconda/clustalw
   :alt:   (downloads)
.. |docker_clustalw| image:: https://quay.io/repository/biocontainers/clustalw/status
   :target: https://quay.io/repository/biocontainers/clustalw
.. _`clustalw/tags`: https://quay.io/repository/biocontainers/clustalw?tab=tags


.. raw:: html

    <script>
        var package = "clustalw";
        var versions = ["2.1","2.1","2.1","2.1","2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clustalw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clustalw/README.html