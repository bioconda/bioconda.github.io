:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypgatk'
.. highlight: bash

pypgatk
=======

.. conda:recipe:: pypgatk
   :replaces_section_title:
   :noindex:

   The Pypgatk framework and library provides a set of tools to perform ProteoGenomics Analysis.

   :homepage: http://github.com/bigbio/py-pgatk
   :documentation: https://pgatk.readthedocs.io/en/latest/pypgatk.html
   
   :developer docs: https://github.com/bigbio/py-pgatk
   :license: APACHE / Apache 2
   :recipe: /`pypgatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk/meta.yaml>`_

   


.. conda:package:: pypgatk

   |downloads_pypgatk| |docker_pypgatk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.23-0</code>,  <code>0.0.22-0</code>,  <code>0.0.19-0</code>,  <code>0.0.18-0</code>,  <code>0.0.17-0</code>,  <code>0.0.16-0</code>,  <code>0.0.15-0</code>,  <code>0.0.14-0</code>,  <code>0.0.13-0</code>,  </span></summary>
      

      ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends click: 
   :depends gffutils: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pyopenms: ``2.7.0``
   :depends pysam: ``>=0.16``
   :depends pyteomics: ``>=4.2``
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends ratelimit: 
   :depends requests: 
   :depends simplejson: 
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

      mamba install pypgatk

   and update with::

      mamba update pypgatk

  To create a new environment, run::

      mamba create --name myenvname pypgatk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pypgatk:<tag>

   (see `pypgatk/tags`_ for valid values for ``<tag>``)


.. |downloads_pypgatk| image:: https://img.shields.io/conda/dn/bioconda/pypgatk.svg?style=flat
   :target: https://anaconda.org/bioconda/pypgatk
   :alt:   (downloads)
.. |docker_pypgatk| image:: https://quay.io/repository/biocontainers/pypgatk/status
   :target: https://quay.io/repository/biocontainers/pypgatk
.. _`pypgatk/tags`: https://quay.io/repository/biocontainers/pypgatk?tab=tags


.. raw:: html

    <script>
        var package = "pypgatk";
        var versions = ["0.0.23","0.0.22","0.0.19","0.0.18","0.0.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypgatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypgatk/README.html