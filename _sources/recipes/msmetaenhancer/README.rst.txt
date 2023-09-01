:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msmetaenhancer'
.. highlight: bash

msmetaenhancer
==============

.. conda:recipe:: msmetaenhancer
   :replaces_section_title:
   :noindex:

   MSMetaEnhancer is a Python tool that adds more annotations \(e.g. SMILES\, InChI\, CAS number\) to MSP files.

   :homepage: https://github.com/RECETOX/MSMetaEnhancer
   :documentation: https://msmetaenhancer.readthedocs.io/
   
   :license: MIT
   :recipe: /`msmetaenhancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msmetaenhancer/meta.yaml>`_

   


.. conda:package:: msmetaenhancer

   |downloads_msmetaenhancer| |docker_msmetaenhancer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-1</code>,  <code>0.2.4-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-1``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiocircuitbreaker: 
   :depends aiohttp: 
   :depends asyncstdlib: 
   :depends frozendict: 
   :depends matchms: 
   :depends multidict: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends rdkit: 
   :depends requests: 
   :depends scipy: 
   :depends tabulate: 
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

      mamba install msmetaenhancer

   and update with::

      mamba update msmetaenhancer

  To create a new environment, run::

      mamba create --name myenvname msmetaenhancer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/msmetaenhancer:<tag>

   (see `msmetaenhancer/tags`_ for valid values for ``<tag>``)


.. |downloads_msmetaenhancer| image:: https://img.shields.io/conda/dn/bioconda/msmetaenhancer.svg?style=flat
   :target: https://anaconda.org/bioconda/msmetaenhancer
   :alt:   (downloads)
.. |docker_msmetaenhancer| image:: https://quay.io/repository/biocontainers/msmetaenhancer/status
   :target: https://quay.io/repository/biocontainers/msmetaenhancer
.. _`msmetaenhancer/tags`: https://quay.io/repository/biocontainers/msmetaenhancer?tab=tags


.. raw:: html

    <script>
        var package = "msmetaenhancer";
        var versions = ["0.3.0","0.3.0","0.2.5","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msmetaenhancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msmetaenhancer/README.html