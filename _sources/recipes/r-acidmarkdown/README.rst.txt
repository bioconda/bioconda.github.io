:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-acidmarkdown'
.. highlight: bash

r-acidmarkdown
==============

.. conda:recipe:: r-acidmarkdown
   :replaces_section_title:
   :noindex:

   Toolkit for extending the functionality of R Markdown.

   :homepage: https://r.acidgenomics.com/packages/acidmarkdown/
   :developer docs: https://github.com/acidgenomics/r-acidmarkdown
   :license: GPL / AGPL-3.0
   :recipe: /`r-acidmarkdown <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidmarkdown>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-acidmarkdown/meta.yaml>`_

   


.. conda:package:: r-acidmarkdown

   |downloads_r-acidmarkdown| |docker_r-acidmarkdown|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-2</code>,  <code>0.2.5-1</code>,  <code>0.2.5-0</code>,  <code>0.1.6-1</code>,  <code>0.1.6-0</code>,  <code>0.1.5-0</code>,  </span></summary>
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-1``,  ``0.1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-acidgenerics: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-goalie: 
   :depends r-knitr: 
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

      mamba install r-acidmarkdown

   and update with::

      mamba update r-acidmarkdown

  To create a new environment, run::

      mamba create --name myenvname r-acidmarkdown

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-acidmarkdown:<tag>

   (see `r-acidmarkdown/tags`_ for valid values for ``<tag>``)


.. |downloads_r-acidmarkdown| image:: https://img.shields.io/conda/dn/bioconda/r-acidmarkdown.svg?style=flat
   :target: https://anaconda.org/bioconda/r-acidmarkdown
   :alt:   (downloads)
.. |docker_r-acidmarkdown| image:: https://quay.io/repository/biocontainers/r-acidmarkdown/status
   :target: https://quay.io/repository/biocontainers/r-acidmarkdown
.. _`r-acidmarkdown/tags`: https://quay.io/repository/biocontainers/r-acidmarkdown?tab=tags


.. raw:: html

    <script>
        var package = "r-acidmarkdown";
        var versions = ["0.3.0","0.3.0","0.2.6","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-acidmarkdown/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-acidmarkdown/README.html