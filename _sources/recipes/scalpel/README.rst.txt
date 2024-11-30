:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scalpel'
.. highlight: bash

scalpel
=======

.. conda:recipe:: scalpel
   :replaces_section_title:
   :noindex:

   Sensitive detection of INDELs \(INsertions and DELetions\)

   :homepage: http://scalpel.sourceforge.net/
   :license: MIT
   :recipe: /`scalpel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scalpel/meta.yaml>`_

   


.. conda:package:: scalpel

   |downloads_scalpel| |docker_scalpel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.4-7</code>,  <code>0.5.4-6</code>,  <code>0.5.4-5</code>,  <code>0.5.4-4</code>,  <code>0.5.4-3</code>,  <code>0.5.4-2</code>,  <code>0.5.4-1</code>,  <code>0.5.4-0</code>,  <code>0.5.3-2</code>,  </span></summary>
      

      ``0.5.4-7``,  ``0.5.4-6``,  ``0.5.4-5``,  ``0.5.4-4``,  ``0.5.4-3``,  ``0.5.4-2``,  ``0.5.4-1``,  ``0.5.4-0``,  ``0.5.3-2``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: 
   :depends bcftools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends samtools: 
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

      mamba install scalpel

   and update with::

      mamba update scalpel

  To create a new environment, run::

      mamba create --name myenvname scalpel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scalpel:<tag>

   (see `scalpel/tags`_ for valid values for ``<tag>``)


.. |downloads_scalpel| image:: https://img.shields.io/conda/dn/bioconda/scalpel.svg?style=flat
   :target: https://anaconda.org/bioconda/scalpel
   :alt:   (downloads)
.. |docker_scalpel| image:: https://quay.io/repository/biocontainers/scalpel/status
   :target: https://quay.io/repository/biocontainers/scalpel
.. _`scalpel/tags`: https://quay.io/repository/biocontainers/scalpel?tab=tags


.. raw:: html

    <script>
        var package = "scalpel";
        var versions = ["0.5.4","0.5.4","0.5.4","0.5.4","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scalpel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scalpel/README.html