:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-syntactic'
.. highlight: bash

r-syntactic
===========

.. conda:recipe:: r-syntactic
   :replaces_section_title:
   :noindex:

   Make syntactically valid names out of character vectors.

   :homepage: https://r.acidgenomics.com/packages/syntactic/
   :developer docs: https://github.com/acidgenomics/r-syntactic
   :license: GPL / AGPL-3
   :recipe: /`r-syntactic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-syntactic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-syntactic/meta.yaml>`_

   


.. conda:package:: r-syntactic

   |downloads_r-syntactic| |docker_r-syntactic|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.1-1</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.6-2</code>,  <code>0.6.6-1</code>,  <code>0.6.6-0</code>,  <code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-1</code>,  </span></summary>
      

      ``0.7.1-1``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.6-2``,  ``0.6.6-1``,  ``0.6.6-0``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-1``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.5.0-0``,  ``0.4.5-4``,  ``0.4.5-3``,  ``0.4.5-2``,  ``0.4.5-0``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.10-0``,  ``0.3.9-1``,  ``0.3.9-0``,  ``0.3.8-0``,  ``0.3.7-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.10-0``,  ``0.1.9-0``,  ``0.1.5-0``,  ``0.1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-acidgenerics: ``>=0.7.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-goalie: ``>=0.7.0``
   :depends r-stringi: ``>=1.7.12``
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

      mamba install r-syntactic

   and update with::

      mamba update r-syntactic

  To create a new environment, run::

      mamba create --name myenvname r-syntactic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-syntactic:<tag>

   (see `r-syntactic/tags`_ for valid values for ``<tag>``)


.. |downloads_r-syntactic| image:: https://img.shields.io/conda/dn/bioconda/r-syntactic.svg?style=flat
   :target: https://anaconda.org/bioconda/r-syntactic
   :alt:   (downloads)
.. |docker_r-syntactic| image:: https://quay.io/repository/biocontainers/r-syntactic/status
   :target: https://quay.io/repository/biocontainers/r-syntactic
.. _`r-syntactic/tags`: https://quay.io/repository/biocontainers/r-syntactic?tab=tags


.. raw:: html

    <script>
        var package = "r-syntactic";
        var versions = ["0.7.1","0.7.1","0.7.0","0.6.6","0.6.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-syntactic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-syntactic/README.html