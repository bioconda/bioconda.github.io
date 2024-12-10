:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequali'
.. highlight: bash

sequali
=======

.. conda:recipe:: sequali
   :replaces_section_title:
   :noindex:

   Fast sequencing quality metrics

   :homepage: https://github.com/rhpvorderman/sequali
   :documentation: sequali.readthedocs.io
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`sequali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequali/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.10854010`

   


.. conda:package:: sequali

   |downloads_sequali| |docker_sequali|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.0-1</code>,  <code>0.12.0-0</code>,  <code>0.11.1-2</code>,  <code>0.11.1-1</code>,  <code>0.11.1-0</code>,  <code>0.11.0-0</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.1-0</code>,  </span></summary>
      

      ``0.12.0-1``,  ``0.12.0-0``,  ``0.11.1-2``,  ``0.11.1-1``,  ``0.11.1-0``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends pygal: ``>=3.0.4``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends tqdm: 
   :depends xopen: ``>=2.0.0``
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

      mamba install sequali

   and update with::

      mamba update sequali

  To create a new environment, run::

      mamba create --name myenvname sequali

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sequali:<tag>

   (see `sequali/tags`_ for valid values for ``<tag>``)


.. |downloads_sequali| image:: https://img.shields.io/conda/dn/bioconda/sequali.svg?style=flat
   :target: https://anaconda.org/bioconda/sequali
   :alt:   (downloads)
.. |docker_sequali| image:: https://quay.io/repository/biocontainers/sequali/status
   :target: https://quay.io/repository/biocontainers/sequali
.. _`sequali/tags`: https://quay.io/repository/biocontainers/sequali?tab=tags


.. raw:: html

    <script>
        var package = "sequali";
        var versions = ["0.12.0","0.12.0","0.11.1","0.11.1","0.11.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequali/README.html