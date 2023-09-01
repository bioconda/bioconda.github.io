:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfaffix'
.. highlight: bash

gfaffix
=======

.. conda:recipe:: gfaffix
   :replaces_section_title:
   :noindex:

   GFAffix identifies and collapses walk\-preserving shared affixes in variation graphs

   :homepage: https://github.com/marschall-lab/GFAffix
   :license: MIT
   :recipe: /`gfaffix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfaffix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfaffix/meta.yaml>`_

   


.. conda:package:: gfaffix

   |downloads_gfaffix| |docker_gfaffix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.5-0</code>,  <code>0.1.4-2</code>,  <code>0.1.4-1</code>,  <code>0.1.4-0</code>,  <code>0.1.3-1</code>,  <code>0.1.3-0</code>,  <code>0.1.2.5-1</code>,  <code>0.1.2.5-0</code>,  <code>0.1.2.4-0</code>,  </span></summary>
      

      ``0.1.5-0``,  ``0.1.4-2``,  ``0.1.4-1``,  ``0.1.4-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2.5-1``,  ``0.1.2.5-0``,  ``0.1.2.4-0``,  ``0.1.2.3-0``,  ``0.1.2.2-0``,  ``0.1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install gfaffix

   and update with::

      mamba update gfaffix

  To create a new environment, run::

      mamba create --name myenvname gfaffix

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gfaffix:<tag>

   (see `gfaffix/tags`_ for valid values for ``<tag>``)


.. |downloads_gfaffix| image:: https://img.shields.io/conda/dn/bioconda/gfaffix.svg?style=flat
   :target: https://anaconda.org/bioconda/gfaffix
   :alt:   (downloads)
.. |docker_gfaffix| image:: https://quay.io/repository/biocontainers/gfaffix/status
   :target: https://quay.io/repository/biocontainers/gfaffix
.. _`gfaffix/tags`: https://quay.io/repository/biocontainers/gfaffix?tab=tags


.. raw:: html

    <script>
        var package = "gfaffix";
        var versions = ["0.1.5","0.1.4","0.1.4","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfaffix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfaffix/README.html