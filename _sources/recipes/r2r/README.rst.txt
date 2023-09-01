:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r2r'
.. highlight: bash

r2r
===

.. conda:recipe:: r2r
   :replaces_section_title:
   :noindex:

   software to speed depiction of aesthetic consensus RNA secondary structures

   :homepage: http://breaker.research.yale.edu/R2R/
   :license: GPL-2
   :recipe: /`r2r <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r2r/meta.yaml>`_

   


.. conda:package:: r2r

   |downloads_r2r| |docker_r2r|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-4</code>,  <code>1.0.6-3</code>,  <code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-3</code>,  <code>1.0.5-2</code>,  <code>1.0.5-1</code>,  <code>1.0.5-0</code>,  </span></summary>
      

      ``1.0.6-4``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-clone: ``0.46.*``
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

      mamba install r2r

   and update with::

      mamba update r2r

  To create a new environment, run::

      mamba create --name myenvname r2r

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r2r:<tag>

   (see `r2r/tags`_ for valid values for ``<tag>``)


.. |downloads_r2r| image:: https://img.shields.io/conda/dn/bioconda/r2r.svg?style=flat
   :target: https://anaconda.org/bioconda/r2r
   :alt:   (downloads)
.. |docker_r2r| image:: https://quay.io/repository/biocontainers/r2r/status
   :target: https://quay.io/repository/biocontainers/r2r
.. _`r2r/tags`: https://quay.io/repository/biocontainers/r2r?tab=tags


.. raw:: html

    <script>
        var package = "r2r";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.6","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r2r/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r2r/README.html