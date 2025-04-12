:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oarfish'
.. highlight: bash

oarfish
=======

.. conda:recipe:: oarfish
   :replaces_section_title:
   :noindex:

   oarfish is a tool for fast\, accurate and versatile transcript quantification from long\-read RNA\-seq data

   :homepage: https://github.com/COMBINE-lab/oarfish
   :license: BSD-3-Clause
   :recipe: /`oarfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oarfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oarfish/meta.yaml>`_

   


.. conda:package:: oarfish

   |downloads_oarfish| |docker_oarfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-0</code>,  <code>0.7.3-0</code>,  <code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.5-1</code>,  <code>0.6.5-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-0</code>,  </span></summary>
      

      ``0.8.0-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.5-1``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.1-0``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install oarfish

   and update with::

      mamba update oarfish

  To create a new environment, run::

      mamba create --name myenvname oarfish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/oarfish:<tag>

   (see `oarfish/tags`_ for valid values for ``<tag>``)


.. |downloads_oarfish| image:: https://img.shields.io/conda/dn/bioconda/oarfish.svg?style=flat
   :target: https://anaconda.org/bioconda/oarfish
   :alt:   (downloads)
.. |docker_oarfish| image:: https://quay.io/repository/biocontainers/oarfish/status
   :target: https://quay.io/repository/biocontainers/oarfish
.. _`oarfish/tags`: https://quay.io/repository/biocontainers/oarfish?tab=tags


.. raw:: html

    <script>
        var package = "oarfish";
        var versions = ["0.8.0","0.7.3","0.7.2","0.7.1","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oarfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oarfish/README.html