:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'open-cravat'
.. highlight: bash

open-cravat
===========

.. conda:recipe:: open-cravat
   :replaces_section_title:
   :noindex:

   OpenCRAVAT \- variant analysis toolkit

   :homepage: https://www.opencravat.org
   :documentation: https://github.com/KarchinLab/open-cravat/wiki
   
   :developer docs: https://github.com/KarchinLab/open-cravat
   :license: MIT / MIT
   :recipe: /`open-cravat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/open-cravat/meta.yaml>`_

   


.. conda:package:: open-cravat

   |downloads_open-cravat| |docker_open-cravat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11.1-0</code>,  <code>2.11.0-0</code>,  <code>2.9.1-0</code>,  <code>2.9.0-0</code>,  <code>2.8.0-0</code>,  <code>2.7.3-0</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.6.1-0</code>,  </span></summary>
      

      ``2.11.1-0``,  ``2.11.0-0``,  ``2.9.1-0``,  ``2.9.0-0``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.9-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.5-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends aiohttp: ``<4.0.0``
   :depends aiosqlite: 
   :depends biopython: 
   :depends chardet: ``>=3.0.4``
   :depends intervaltree: 
   :depends markdown: 
   :depends mpmath: 
   :depends nest-asyncio: 
   :depends openpyxl: 
   :depends oyaml: 
   :depends psutil: 
   :depends pyliftover: 
   :depends python: ``>=3.9``
   :depends pyvcf3: 
   :depends pyyaml: 
   :depends requests: 
   :depends requests-toolbelt: 
   :depends setuptools: 
   :depends twobitreader: 
   :depends websockets: 
   :depends xlsxwriter: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install open-cravat

   and update with::

      mamba update open-cravat

  To create a new environment, run::

      mamba create --name myenvname open-cravat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/open-cravat:<tag>

   (see `open-cravat/tags`_ for valid values for ``<tag>``)


.. |downloads_open-cravat| image:: https://img.shields.io/conda/dn/bioconda/open-cravat.svg?style=flat
   :target: https://anaconda.org/bioconda/open-cravat
   :alt:   (downloads)
.. |docker_open-cravat| image:: https://quay.io/repository/biocontainers/open-cravat/status
   :target: https://quay.io/repository/biocontainers/open-cravat
.. _`open-cravat/tags`: https://quay.io/repository/biocontainers/open-cravat?tab=tags


.. raw:: html

    <script>
        var package = "open-cravat";
        var versions = ["2.11.1","2.11.0","2.9.1","2.9.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/open-cravat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/open-cravat/README.html