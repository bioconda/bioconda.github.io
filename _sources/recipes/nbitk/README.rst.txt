:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nbitk'
.. highlight: bash

nbitk
=====

.. conda:recipe:: nbitk
   :replaces_section_title:
   :noindex:

   nbitk\: Naturalis BioInformatics ToolKit

   :homepage: https://pypi.org/project/nbitk/
   :license: APACHE / Apache-2.0
   :recipe: /`nbitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nbitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nbitk/meta.yaml>`_

   


.. conda:package:: nbitk

   |downloads_nbitk| |docker_nbitk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-0</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.5.12-0</code>,  <code>0.5.11-0</code>,  <code>0.5.10-0</code>,  <code>0.5.9-0</code>,  <code>0.5.8-0</code>,  </span></summary>
      

      ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.5.12-0``,  ``0.5.11-0``,  ``0.5.10-0``,  ``0.5.9-0``,  ``0.5.8-0``,  ``0.5.7-0``,  ``0.5.6-0``,  ``0.5.5-0``,  ``0.5.3-1``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.3-0``,  ``0.3.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends minio: 
   :depends openpyxl: 
   :depends pandas: 
   :depends python: ``>=3.9``
   :depends pyyaml: 
   :depends requests: 
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

      mamba install nbitk

   and update with::

      mamba update nbitk

  To create a new environment, run::

      mamba create --name myenvname nbitk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nbitk:<tag>

   (see `nbitk/tags`_ for valid values for ``<tag>``)


.. |downloads_nbitk| image:: https://img.shields.io/conda/dn/bioconda/nbitk.svg?style=flat
   :target: https://anaconda.org/bioconda/nbitk
   :alt:   (downloads)
.. |docker_nbitk| image:: https://quay.io/repository/biocontainers/nbitk/status
   :target: https://quay.io/repository/biocontainers/nbitk
.. _`nbitk/tags`: https://quay.io/repository/biocontainers/nbitk?tab=tags


.. raw:: html

    <script>
        var package = "nbitk";
        var versions = ["0.6.4","0.6.3","0.6.2","0.6.1","0.5.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nbitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nbitk/README.html