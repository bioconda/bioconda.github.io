:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homer'
.. highlight: bash

homer
=====

.. conda:recipe:: homer
   :replaces_section_title:
   :noindex:

   Software for motif discovery and next generation sequencing analysis

   :homepage: http://homer.ucsd.edu/homer/index.html
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`homer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homer/meta.yaml>`_

   


.. conda:package:: homer

   |downloads_homer| |docker_homer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.1-0</code>,  <code>4.11-9</code>,  <code>4.11-8</code>,  <code>4.11-7</code>,  <code>4.11-6</code>,  <code>4.11-5</code>,  <code>4.11-4</code>,  <code>4.11-3</code>,  <code>4.11-2</code>,  </span></summary>
      

      ``5.1-0``,  ``4.11-9``,  ``4.11-8``,  ``4.11-7``,  ``4.11-6``,  ``4.11-5``,  ``4.11-4``,  ``4.11-3``,  ``4.11-2``,  ``4.11-1``,  ``4.11-0``,  ``4.10-0``,  ``4.9.1-6``,  ``4.9.1-5``,  ``4.9.1-4``,  ``4.9.1-3``,  ``4.9.1-2``,  ``4.9.1-1``,  ``4.9.1-0``,  ``4.8.3-3``,  ``4.8-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends unzip: 
   :depends wget: 
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

      mamba install homer

   and update with::

      mamba update homer

  To create a new environment, run::

      mamba create --name myenvname homer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/homer:<tag>

   (see `homer/tags`_ for valid values for ``<tag>``)


.. |downloads_homer| image:: https://img.shields.io/conda/dn/bioconda/homer.svg?style=flat
   :target: https://anaconda.org/bioconda/homer
   :alt:   (downloads)
.. |docker_homer| image:: https://quay.io/repository/biocontainers/homer/status
   :target: https://quay.io/repository/biocontainers/homer
.. _`homer/tags`: https://quay.io/repository/biocontainers/homer?tab=tags


.. raw:: html

    <script>
        var package = "homer";
        var versions = ["5.1","4.11","4.11","4.11","4.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homer/README.html