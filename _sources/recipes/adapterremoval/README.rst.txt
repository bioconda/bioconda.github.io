:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adapterremoval'
.. highlight: bash

adapterremoval
==============

.. conda:recipe:: adapterremoval
   :replaces_section_title:
   :noindex:

   The AdapterRemoval v2 tool for merging and clipping reads.

   :homepage: https://github.com/MikkelSchubert/adapterremoval
   :license: GPL3
   :recipe: /`adapterremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval/meta.yaml>`_

   


.. conda:package:: adapterremoval

   |downloads_adapterremoval| |docker_adapterremoval|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.4-1</code>,  <code>2.3.4-0</code>,  <code>2.3.3-3</code>,  <code>2.3.3-2</code>,  <code>2.3.3-1</code>,  <code>2.3.3-0</code>,  <code>2.3.2-2</code>,  <code>2.3.2-1</code>,  <code>2.3.2-0</code>,  </span></summary>
      

      ``2.3.4-1``,  ``2.3.4-0``,  ``2.3.3-3``,  ``2.3.3-2``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-4``,  ``2.2.2-3``,  ``2.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install adapterremoval

   and update with::

      mamba update adapterremoval

  To create a new environment, run::

      mamba create --name myenvname adapterremoval

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adapterremoval:<tag>

   (see `adapterremoval/tags`_ for valid values for ``<tag>``)


.. |downloads_adapterremoval| image:: https://img.shields.io/conda/dn/bioconda/adapterremoval.svg?style=flat
   :target: https://anaconda.org/bioconda/adapterremoval
   :alt:   (downloads)
.. |docker_adapterremoval| image:: https://quay.io/repository/biocontainers/adapterremoval/status
   :target: https://quay.io/repository/biocontainers/adapterremoval
.. _`adapterremoval/tags`: https://quay.io/repository/biocontainers/adapterremoval?tab=tags


.. raw:: html

    <script>
        var package = "adapterremoval";
        var versions = ["2.3.4","2.3.4","2.3.3","2.3.3","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremoval/README.html