:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longshot'
.. highlight: bash

longshot
========

.. conda:recipe:: longshot
   :replaces_section_title:
   :noindex:

   Diploid SNV caller for error\-prone reads.

   :homepage: https://github.com/pjedge/longshot
   :license: MIT
   :recipe: /`longshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longshot/meta.yaml>`_

   


.. conda:package:: longshot

   |downloads_longshot| |docker_longshot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.5-2</code>,  <code>0.4.5-1</code>,  <code>0.4.5-0</code>,  <code>0.4.1-2</code>,  <code>0.4.1-1</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.5-0</code>,  <code>v0.3.5-0</code>,  </span></summary>
      

      ``0.4.5-2``,  ``0.4.5-1``,  ``0.4.5-0``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``v0.3.5-0``,  ``v0.3.4-0``,  ``v0.3.3-0``,  ``v0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends xz: ``>=5.2.6,<6.0a0``
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

      mamba install longshot

   and update with::

      mamba update longshot

  To create a new environment, run::

      mamba create --name myenvname longshot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longshot:<tag>

   (see `longshot/tags`_ for valid values for ``<tag>``)


.. |downloads_longshot| image:: https://img.shields.io/conda/dn/bioconda/longshot.svg?style=flat
   :target: https://anaconda.org/bioconda/longshot
   :alt:   (downloads)
.. |docker_longshot| image:: https://quay.io/repository/biocontainers/longshot/status
   :target: https://quay.io/repository/biocontainers/longshot
.. _`longshot/tags`: https://quay.io/repository/biocontainers/longshot?tab=tags


.. raw:: html

    <script>
        var package = "longshot";
        var versions = ["0.4.5","0.4.5","0.4.5","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longshot/README.html