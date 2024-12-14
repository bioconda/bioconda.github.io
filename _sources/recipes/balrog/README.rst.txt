:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'balrog'
.. highlight: bash

balrog
======

.. conda:recipe:: balrog
   :replaces_section_title:
   :noindex:

   Balrog\: A universal protein model for prokaryotic gene prediction

   :homepage: https://github.com/Markusjsommer/BalrogCPP
   :license: MIT
   :recipe: /`balrog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/balrog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/balrog/meta.yaml>`_

   


.. conda:package:: balrog

   |downloads_balrog| |docker_balrog|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-6</code>,  <code>0.5.1-5</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  </span></summary>
      

      ``0.5.1-6``,  ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.19-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends scipy: 
   :depends zlib: 
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

      mamba install balrog

   and update with::

      mamba update balrog

  To create a new environment, run::

      mamba create --name myenvname balrog

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/balrog:<tag>

   (see `balrog/tags`_ for valid values for ``<tag>``)


.. |downloads_balrog| image:: https://img.shields.io/conda/dn/bioconda/balrog.svg?style=flat
   :target: https://anaconda.org/bioconda/balrog
   :alt:   (downloads)
.. |docker_balrog| image:: https://quay.io/repository/biocontainers/balrog/status
   :target: https://quay.io/repository/biocontainers/balrog
.. _`balrog/tags`: https://quay.io/repository/biocontainers/balrog?tab=tags


.. raw:: html

    <script>
        var package = "balrog";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/balrog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/balrog/README.html