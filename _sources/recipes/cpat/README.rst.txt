:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cpat'
.. highlight: bash

cpat
====

.. conda:recipe:: cpat
   :replaces_section_title:
   :noindex:

   Coding Potential Assessment Tool

   :homepage: https://cpat.readthedocs.io/en/latest/
   :license: GNU General Public v2 or later (GPLv2+)
   :recipe: /`cpat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cpat/meta.yaml>`_

   


.. conda:package:: cpat

   |downloads_cpat| |docker_cpat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.4-2</code>,  <code>3.0.4-1</code>,  <code>3.0.4-0</code>,  <code>2.0.0-4</code>,  <code>2.0.0-3</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.2.4-1</code>,  </span></summary>
      

      ``3.0.4-2``,  ``3.0.4-1``,  ``3.0.4-0``,  ``2.0.0-4``,  ``2.0.0-3``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.4-1``,  ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.2-2``

      
      .. raw:: html

         </details>
      

   
   :depends bx-python: 
   :depends libgcc-ng: ``>=12``
   :depends numpy: ``>=1.21.6,<2.0a0``
   :depends pysam: 
   :depends python: ``>=3.8,<3.9.0a0``
   :depends python_abi: ``3.8.* *_cp38``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cpat

   and update with::

      mamba update cpat

  To create a new environment, run::

      mamba create --name myenvname cpat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cpat:<tag>

   (see `cpat/tags`_ for valid values for ``<tag>``)


.. |downloads_cpat| image:: https://img.shields.io/conda/dn/bioconda/cpat.svg?style=flat
   :target: https://anaconda.org/bioconda/cpat
   :alt:   (downloads)
.. |docker_cpat| image:: https://quay.io/repository/biocontainers/cpat/status
   :target: https://quay.io/repository/biocontainers/cpat
.. _`cpat/tags`: https://quay.io/repository/biocontainers/cpat?tab=tags


.. raw:: html

    <script>
        var package = "cpat";
        var versions = ["3.0.4","3.0.4","3.0.4","2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cpat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cpat/README.html