:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mashtree'
.. highlight: bash

mashtree
========

.. conda:recipe:: mashtree
   :replaces_section_title:
   :noindex:

   Create a tree using Mash distances.

   :homepage: https://github.com/lskatz/mashtree
   :documentation: https://github.com/lskatz/mashtree/blob/v1.4.6/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mashtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mashtree/meta.yaml>`_

   


.. conda:package:: mashtree

   |downloads_mashtree| |docker_mashtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.6-3</code>,  <code>1.4.6-2</code>,  <code>1.4.6-1</code>,  <code>1.4.6-0</code>,  <code>1.4.5-0</code>,  <code>1.4.3-0</code>,  <code>1.2.0-2</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.4.6-3``,  ``1.4.6-2``,  ``1.4.6-1``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.3-0``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1-0``,  ``1.0.4-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.57-1``,  ``0.57-0``,  ``0.55-0``,  ``0.37-0``,  ``0.36-0``,  ``0.35.4-0``,  ``0.30-2``,  ``0.30-0``,  ``0.28-0``,  ``0.26-0``,  ``0.25-0``,  ``0.21-0``,  ``0.20-0``,  ``0.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends mash: ``>=2``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: 
   :depends perl-file-which: 
   :depends perl-module-build: ``0.4234.*``
   :depends quicktree: 
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

      mamba install mashtree

   and update with::

      mamba update mashtree

  To create a new environment, run::

      mamba create --name myenvname mashtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mashtree:<tag>

   (see `mashtree/tags`_ for valid values for ``<tag>``)


.. |downloads_mashtree| image:: https://img.shields.io/conda/dn/bioconda/mashtree.svg?style=flat
   :target: https://anaconda.org/bioconda/mashtree
   :alt:   (downloads)
.. |docker_mashtree| image:: https://quay.io/repository/biocontainers/mashtree/status
   :target: https://quay.io/repository/biocontainers/mashtree
.. _`mashtree/tags`: https://quay.io/repository/biocontainers/mashtree?tab=tags


.. raw:: html

    <script>
        var package = "mashtree";
        var versions = ["1.4.6","1.4.6","1.4.6","1.4.6","1.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mashtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mashtree/README.html