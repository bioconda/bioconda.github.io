:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms-entropy'
.. highlight: bash

ms-entropy
==========

.. conda:recipe:: ms-entropy
   :replaces_section_title:
   :noindex:

   This package provides a Python implementation of calculating spectral entropy\, entropy similarity\, and Flash entropy search for mass spectrometry data.

   :homepage: https://github.com/YuanyueLi/MSEntropy
   :license: Apache-2.0
   :recipe: /`ms-entropy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-entropy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms-entropy/meta.yaml>`_

   


.. conda:package:: ms-entropy

   |downloads_ms-entropy| |docker_ms-entropy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.0-1</code>,  <code>1.2.0-0</code>,  <code>1.1.3-0</code>,  <code>1.1.2-0</code>,  <code>1.1.1-0</code>,  <code>1.0.4-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  </span></summary>
      

      ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.4-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.12-0``,  ``0.9.11-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install ms-entropy

   and update with::

      mamba update ms-entropy

  To create a new environment, run::

      mamba create --name myenvname ms-entropy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms-entropy:<tag>

   (see `ms-entropy/tags`_ for valid values for ``<tag>``)


.. |downloads_ms-entropy| image:: https://img.shields.io/conda/dn/bioconda/ms-entropy.svg?style=flat
   :target: https://anaconda.org/bioconda/ms-entropy
   :alt:   (downloads)
.. |docker_ms-entropy| image:: https://quay.io/repository/biocontainers/ms-entropy/status
   :target: https://quay.io/repository/biocontainers/ms-entropy
.. _`ms-entropy/tags`: https://quay.io/repository/biocontainers/ms-entropy?tab=tags


.. raw:: html

    <script>
        var package = "ms-entropy";
        var versions = ["1.2.0","1.2.0","1.1.3","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms-entropy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms-entropy/README.html