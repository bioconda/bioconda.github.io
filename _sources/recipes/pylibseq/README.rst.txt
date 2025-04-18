:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylibseq'
.. highlight: bash

pylibseq
========

.. conda:recipe:: pylibseq
   :replaces_section_title:
   :noindex:

   A Python interface to libsequence

   :homepage: http://pypi.python.org/pypi/pylibseq
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pylibseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylibseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylibseq/meta.yaml>`_

   


.. conda:package:: pylibseq

   |downloads_pylibseq| |docker_pylibseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.3-8</code>,  <code>0.2.3-7</code>,  <code>0.2.3-6</code>,  <code>0.2.3-4</code>,  <code>0.2.3-3</code>,  <code>0.2.3-2</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-3</code>,  </span></summary>
      

      ``0.2.3-8``,  ``0.2.3-7``,  ``0.2.3-6``,  ``0.2.3-4``,  ``0.2.3-3``,  ``0.2.3-2``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.9.post0-0``,  ``0.1.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends msprime: ``>=0.7.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install pylibseq

   and update with::

      mamba update pylibseq

  To create a new environment, run::

      mamba create --name myenvname pylibseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pylibseq:<tag>

   (see `pylibseq/tags`_ for valid values for ``<tag>``)


.. |downloads_pylibseq| image:: https://img.shields.io/conda/dn/bioconda/pylibseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pylibseq
   :alt:   (downloads)
.. |docker_pylibseq| image:: https://quay.io/repository/biocontainers/pylibseq/status
   :target: https://quay.io/repository/biocontainers/pylibseq
.. _`pylibseq/tags`: https://quay.io/repository/biocontainers/pylibseq?tab=tags


.. raw:: html

    <script>
        var package = "pylibseq";
        var versions = ["0.2.3","0.2.3","0.2.3","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylibseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylibseq/README.html