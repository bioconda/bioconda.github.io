:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'preseq'
.. highlight: bash

preseq
======

.. conda:recipe:: preseq
   :replaces_section_title:
   :noindex:

   predicting library complexity and genome coverage in high\-throughput sequencing


   :homepage: https://github.com/smithlabcode/preseq
   :documentation: https://preseq.readthedocs.io/
   
   :license: GPL-3.0-or-later
   :recipe: /`preseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq/meta.yaml>`_

   


.. conda:package:: preseq

   |downloads_preseq| |docker_preseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.0-5</code>,  <code>3.2.0-4</code>,  <code>3.2.0-3</code>,  <code>3.2.0-2</code>,  <code>3.2.0-1</code>,  <code>3.2.0-0</code>,  <code>3.1.2-3</code>,  <code>3.1.2-2</code>,  <code>3.1.2-1</code>,  </span></summary>
      

      ``3.2.0-5``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.2-3``,  ``3.1.2-2``,  ``3.1.2-1``,  ``3.1.2-0``,  ``2.0.3-5``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: ``>=1.17,<1.20.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install preseq

   and update with::

      mamba update preseq

  To create a new environment, run::

      mamba create --name myenvname preseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/preseq:<tag>

   (see `preseq/tags`_ for valid values for ``<tag>``)


.. |downloads_preseq| image:: https://img.shields.io/conda/dn/bioconda/preseq.svg?style=flat
   :target: https://anaconda.org/bioconda/preseq
   :alt:   (downloads)
.. |docker_preseq| image:: https://quay.io/repository/biocontainers/preseq/status
   :target: https://quay.io/repository/biocontainers/preseq
.. _`preseq/tags`: https://quay.io/repository/biocontainers/preseq?tab=tags


.. raw:: html

    <script>
        var package = "preseq";
        var versions = ["3.2.0","3.2.0","3.2.0","3.2.0","3.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/preseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/preseq/README.html