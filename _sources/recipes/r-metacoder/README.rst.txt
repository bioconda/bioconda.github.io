:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-metacoder'
.. highlight: bash

r-metacoder
===========

.. conda:recipe:: r-metacoder
   :replaces_section_title:
   :noindex:

   A set of tools for parsing\, manipulating\, and graphing data classified by a hierarchy \(e.g. a taxonomy\).

   :homepage: https://grunwaldlab.github.io/metacoder_documentation/
   :license: GPL3 / GPL-2 | GPL-3
   :recipe: /`r-metacoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metacoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-metacoder/meta.yaml>`_

   


.. conda:package:: r-metacoder

   |downloads_r-metacoder| |docker_r-metacoder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  <code>0.3.5-2</code>,  <code>0.3.5-1</code>,  <code>0.3.5-0</code>,  <code>0.3.4-3</code>,  <code>0.3.4-2</code>,  </span></summary>
      

      ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-2``,  ``0.3.5-1``,  ``0.3.5-0``,  ``0.3.4-3``,  ``0.3.4-2``,  ``0.3.4-1``,  ``0.3.4-0``,  ``0.3.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-crayon: 
   :depends r-dplyr: 
   :depends r-ga: 
   :depends r-ggfittext: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-lazyeval: 
   :depends r-magrittr: 
   :depends r-r6: 
   :depends r-rcpp: 
   :depends r-rcurl: 
   :depends r-readr: 
   :depends r-rlang: 
   :depends r-seqinr: 
   :depends r-stringi: ``>=1.7.12``
   :depends r-stringr: 
   :depends r-taxize: 
   :depends r-tibble: 
   :depends r-vegan: 
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

      mamba install r-metacoder

   and update with::

      mamba update r-metacoder

  To create a new environment, run::

      mamba create --name myenvname r-metacoder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-metacoder:<tag>

   (see `r-metacoder/tags`_ for valid values for ``<tag>``)


.. |downloads_r-metacoder| image:: https://img.shields.io/conda/dn/bioconda/r-metacoder.svg?style=flat
   :target: https://anaconda.org/bioconda/r-metacoder
   :alt:   (downloads)
.. |docker_r-metacoder| image:: https://quay.io/repository/biocontainers/r-metacoder/status
   :target: https://quay.io/repository/biocontainers/r-metacoder
.. _`r-metacoder/tags`: https://quay.io/repository/biocontainers/r-metacoder?tab=tags


.. raw:: html

    <script>
        var package = "r-metacoder";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-metacoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-metacoder/README.html