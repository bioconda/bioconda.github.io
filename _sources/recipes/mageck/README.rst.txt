:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mageck'
.. highlight: bash

mageck
======

.. conda:recipe:: mageck
   :replaces_section_title:
   :noindex:

   MAGeCK \(Model\-based Analysis of Genome\-wide CRISPR\-Cas9 Knockout\)\, an algorithm to process\, QC\, analyze and visualize CRISPR screening data.

   :homepage: http://mageck.sourceforge.net
   :license: BSD License
   :recipe: /`mageck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mageck/meta.yaml>`_

   


.. conda:package:: mageck

   |downloads_mageck| |docker_mageck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.9.5-5</code>,  <code>0.5.9.5-4</code>,  <code>0.5.9.5-3</code>,  <code>0.5.9.5-2</code>,  <code>0.5.9.5-1</code>,  <code>0.5.9.5-0</code>,  <code>0.5.9.4-1</code>,  <code>0.5.9.4-0</code>,  <code>0.5.9.3-2</code>,  </span></summary>
      

      ``0.5.9.5-5``,  ``0.5.9.5-4``,  ``0.5.9.5-3``,  ``0.5.9.5-2``,  ``0.5.9.5-1``,  ``0.5.9.5-0``,  ``0.5.9.4-1``,  ``0.5.9.4-0``,  ``0.5.9.3-2``,  ``0.5.9.3-1``,  ``0.5.9.3-0``,  ``0.5.9.2-0``,  ``0.5.9.1-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.8a-1``,  ``0.5.8a-0``,  ``0.5.7-7``,  ``0.5.7-6``,  ``0.5.7-5``,  ``0.5.7-4``,  ``0.5.7-2``,  ``0.5.7-1``,  ``0.5.7-0``,  ``0.5.7a-0``,  ``0.5.6-1``,  ``0.5.6-0``,  ``0.5.5-1``,  ``0.5.5-0``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends ipython: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scipy: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install mageck

   and update with::

      mamba update mageck

  To create a new environment, run::

      mamba create --name myenvname mageck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mageck:<tag>

   (see `mageck/tags`_ for valid values for ``<tag>``)


.. |downloads_mageck| image:: https://img.shields.io/conda/dn/bioconda/mageck.svg?style=flat
   :target: https://anaconda.org/bioconda/mageck
   :alt:   (downloads)
.. |docker_mageck| image:: https://quay.io/repository/biocontainers/mageck/status
   :target: https://quay.io/repository/biocontainers/mageck
.. _`mageck/tags`: https://quay.io/repository/biocontainers/mageck?tab=tags


.. raw:: html

    <script>
        var package = "mageck";
        var versions = ["0.5.9.5","0.5.9.5","0.5.9.5","0.5.9.5","0.5.9.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mageck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mageck/README.html