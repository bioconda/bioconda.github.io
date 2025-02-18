:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgd'
.. highlight: bash

wgd
===

.. conda:recipe:: wgd
   :replaces_section_title:
   :noindex:

   wgd v2\: a suite of tools to uncover and date ancient polyploidy and whole\-genome duplication

   :homepage: https://github.com/heche-psb/wgd
   :documentation: https://wgdv2.readthedocs.io/en/latest/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`wgd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgd/meta.yaml>`_
   :links: biotools: :biotools:`wgd`, doi: :doi:`10.1007/978-1-0716-2561-3_1`, doi: :doi:`10.1093/bioinformatics/btae272`

   


.. conda:package:: wgd

   |downloads_wgd| |docker_wgd|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.38-0</code>,  <code>2.0.37-0</code>,  <code>2.0.35-0</code>,  <code>2.0.34-0</code>,  <code>2.0.33-0</code>,  <code>2.0.32-0</code>,  <code>2.0.31-0</code>,  <code>2.0.30-0</code>,  <code>2.0.29-0</code>,  </span></summary>
      

      ``2.0.38-0``,  ``2.0.37-0``,  ``2.0.35-0``,  ``2.0.34-0``,  ``2.0.33-0``,  ``2.0.32-0``,  ``2.0.31-0``,  ``2.0.30-0``,  ``2.0.29-0``,  ``2.0.28-0``,  ``2.0.27-0``,  ``2.0.26-0``,  ``2.0.25-0``,  ``2.0.24-0``,  ``2.0.23-0``,  ``2.0.22-0``,  ``2.0.21-0``,  ``2.0.20-0``,  ``2.0.19-0``,  ``2.0.18-0``,  ``2.0.16-0``,  ``2.0.15-0``,  ``2.0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends diamond: 
   :depends mafft: 
   :depends mcl: 
   :depends paml: 
   :depends python: ``>=3.6,<3.10``
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

      mamba install wgd

   and update with::

      mamba update wgd

  To create a new environment, run::

      mamba create --name myenvname wgd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wgd:<tag>

   (see `wgd/tags`_ for valid values for ``<tag>``)


.. |downloads_wgd| image:: https://img.shields.io/conda/dn/bioconda/wgd.svg?style=flat
   :target: https://anaconda.org/bioconda/wgd
   :alt:   (downloads)
.. |docker_wgd| image:: https://quay.io/repository/biocontainers/wgd/status
   :target: https://quay.io/repository/biocontainers/wgd
.. _`wgd/tags`: https://quay.io/repository/biocontainers/wgd?tab=tags


.. raw:: html

    <script>
        var package = "wgd";
        var versions = ["2.0.38","2.0.37","2.0.35","2.0.34","2.0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgd/README.html