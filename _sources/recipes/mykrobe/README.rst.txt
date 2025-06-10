:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mykrobe'
.. highlight: bash

mykrobe
=======

.. conda:recipe:: mykrobe
   :replaces_section_title:
   :noindex:

   Antibiotic resistance prediction in minutes.

   :homepage: https://github.com/Mykrobe-tools/mykrobe
   :documentation: https://github.com/Mykrobe-tools/mykrobe/wiki
   
   :license: MIT / MIT
   :recipe: /`mykrobe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mykrobe/meta.yaml>`_
   :links: doi: :doi:`10.12688/wellcomeopenres.15603.1`, biotools: :biotools:`Mykrobe`

   Rapid antibiotic\-resistance predictions from genome sequence data for Staphylococcus aureus and Mycobacterium tuberculosis.


.. conda:package:: mykrobe

   |downloads_mykrobe| |docker_mykrobe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.0-5</code>,  <code>0.13.0-4</code>,  <code>0.13.0-3</code>,  <code>0.13.0-2</code>,  <code>0.13.0-1</code>,  <code>0.13.0-0</code>,  <code>0.12.2-1</code>,  <code>0.12.2-0</code>,  <code>0.12.1-2</code>,  </span></summary>
      

      ``0.13.0-5``,  ``0.13.0-4``,  ``0.13.0-3``,  ``0.13.0-2``,  ``0.13.0-1``,  ``0.13.0-0``,  ``0.12.2-1``,  ``0.12.2-0``,  ``0.12.1-2``,  ``0.12.1-1``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-1``,  ``0.11.0-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-5``,  ``0.7.0-4``,  ``0.7.0-3``,  ``0.7.0-2``,  ``0.7.0-0``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.5.6-1``,  ``0.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends anytree: 
   :depends biopython: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mongodb: 
   :depends mongoengine: ``>=0.24.1``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pyvcf3: ``>=1.0.3``
   :depends pyvcf3: ``>=1.0.4,<2.0a0``
   :depends requests: 
   :depends setuptools: 
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

      mamba install mykrobe

   and update with::

      mamba update mykrobe

  To create a new environment, run::

      mamba create --name myenvname mykrobe

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mykrobe:<tag>

   (see `mykrobe/tags`_ for valid values for ``<tag>``)


.. |downloads_mykrobe| image:: https://img.shields.io/conda/dn/bioconda/mykrobe.svg?style=flat
   :target: https://anaconda.org/bioconda/mykrobe
   :alt:   (downloads)
.. |docker_mykrobe| image:: https://quay.io/repository/biocontainers/mykrobe/status
   :target: https://quay.io/repository/biocontainers/mykrobe
.. _`mykrobe/tags`: https://quay.io/repository/biocontainers/mykrobe?tab=tags


.. raw:: html

    <script>
        var package = "mykrobe";
        var versions = ["0.13.0","0.13.0","0.13.0","0.13.0","0.13.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mykrobe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mykrobe/README.html