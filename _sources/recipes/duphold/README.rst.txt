:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duphold'
.. highlight: bash

duphold
=======

.. conda:recipe:: duphold
   :replaces_section_title:
   :noindex:

   SV callers like lumpy look at split\-reads and pair distances to find structural variants. This tool is a fast way to add depth information to those calls.

   :homepage: https://github.com/brentp/duphold
   :license: MIT
   :recipe: /`duphold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duphold/meta.yaml>`_

   


.. conda:package:: duphold

   |downloads_duphold| |docker_duphold|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.1-4</code>,  <code>0.2.1-3</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.4-0</code>,  <code>0.1.3-0</code>,  <code>0.1.2-0</code>,  </span></summary>
      

      ``0.2.1-4``,  ``0.2.1-3``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.6-0``,  ``0.0.3-0``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.9,<1.10.0a0``
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

      mamba install duphold

   and update with::

      mamba update duphold

  To create a new environment, run::

      mamba create --name myenvname duphold

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/duphold:<tag>

   (see `duphold/tags`_ for valid values for ``<tag>``)


.. |downloads_duphold| image:: https://img.shields.io/conda/dn/bioconda/duphold.svg?style=flat
   :target: https://anaconda.org/bioconda/duphold
   :alt:   (downloads)
.. |docker_duphold| image:: https://quay.io/repository/biocontainers/duphold/status
   :target: https://quay.io/repository/biocontainers/duphold
.. _`duphold/tags`: https://quay.io/repository/biocontainers/duphold?tab=tags


.. raw:: html

    <script>
        var package = "duphold";
        var versions = ["0.2.1","0.2.1","0.2.1","0.2.1","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duphold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duphold/README.html