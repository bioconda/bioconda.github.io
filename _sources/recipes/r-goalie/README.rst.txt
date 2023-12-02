:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-goalie'
.. highlight: bash

r-goalie
========

.. conda:recipe:: r-goalie
   :replaces_section_title:
   :noindex:

   Assertive check functions for defensive R programming.

   :homepage: https://r.acidgenomics.com/packages/goalie/
   :developer docs: https://github.com/acidgenomics/r-goalie
   :license: GPL / AGPL-3
   :recipe: /`r-goalie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie/meta.yaml>`_

   


.. conda:package:: r-goalie

   |downloads_r-goalie| |docker_r-goalie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.6-1</code>,  <code>0.7.6-0</code>,  <code>0.7.5-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.6.18-0</code>,  <code>0.6.17-0</code>,  </span></summary>
      

      ``0.7.6-1``,  ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.6.18-0``,  ``0.6.17-0``,  ``0.6.16-0``,  ``0.6.15-0``,  ``0.6.14-0``,  ``0.6.13-0``,  ``0.6.12-0``,  ``0.6.11-0``,  ``0.6.10-1``,  ``0.6.10-0``,  ``0.6.9-1``,  ``0.6.9-0``,  ``0.6.8-1``,  ``0.6.8-0``,  ``0.6.7-0``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.11-0``,  ``0.4.10-0``,  ``0.4.9-0``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.12-0``,  ``0.3.11-0``,  ``0.3.10-0``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.19-0``,  ``0.2.16-0``,  ``0.2.9-0``,  ``0.2.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
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

      mamba install r-goalie

   and update with::

      mamba update r-goalie

  To create a new environment, run::

      mamba create --name myenvname r-goalie

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-goalie:<tag>

   (see `r-goalie/tags`_ for valid values for ``<tag>``)


.. |downloads_r-goalie| image:: https://img.shields.io/conda/dn/bioconda/r-goalie.svg?style=flat
   :target: https://anaconda.org/bioconda/r-goalie
   :alt:   (downloads)
.. |docker_r-goalie| image:: https://quay.io/repository/biocontainers/r-goalie/status
   :target: https://quay.io/repository/biocontainers/r-goalie
.. _`r-goalie/tags`: https://quay.io/repository/biocontainers/r-goalie?tab=tags


.. raw:: html

    <script>
        var package = "r-goalie";
        var versions = ["0.7.6","0.7.6","0.7.5","0.7.4","0.7.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-goalie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-goalie/README.html