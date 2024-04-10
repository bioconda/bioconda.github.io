:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybedtools'
.. highlight: bash

pybedtools
==========

.. conda:recipe:: pybedtools
   :replaces_section_title:
   :noindex:

   Wraps BEDTools for use in Python and adds many additional features.

   :homepage: https://github.com/daler/pybedtools
   :documentation: https://daler.github.io/pybedtools
   
   :license: MIT / MIT
   :recipe: /`pybedtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybedtools/meta.yaml>`_
   :links: biotools: :biotools:`pybedtools`

   


.. conda:package:: pybedtools

   |downloads_pybedtools| |docker_pybedtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-0</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-2</code>,  <code>0.9.0-1</code>,  <code>0.9.0-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  <code>0.8.1-3</code>,  </span></summary>
      

      ``0.10.0-0``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-3``,  ``0.8.1-2``,  ``0.8.1-1``,  ``0.8.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.10-3``,  ``0.7.10-2``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-1``,  ``0.7.7-1``,  ``0.7.6-1``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.2-1``,  ``0.7.0-1``,  ``0.6.9-6``,  ``0.6.9-5``,  ``0.6.9-4``,  ``0.6.9-3``,  ``0.6.9-2``,  ``0.6.9-1``,  ``0.6.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends pysam: 
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

      mamba install pybedtools

   and update with::

      mamba update pybedtools

  To create a new environment, run::

      mamba create --name myenvname pybedtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybedtools:<tag>

   (see `pybedtools/tags`_ for valid values for ``<tag>``)


.. |downloads_pybedtools| image:: https://img.shields.io/conda/dn/bioconda/pybedtools.svg?style=flat
   :target: https://anaconda.org/bioconda/pybedtools
   :alt:   (downloads)
.. |docker_pybedtools| image:: https://quay.io/repository/biocontainers/pybedtools/status
   :target: https://quay.io/repository/biocontainers/pybedtools
.. _`pybedtools/tags`: https://quay.io/repository/biocontainers/pybedtools?tab=tags


.. raw:: html

    <script>
        var package = "pybedtools";
        var versions = ["0.10.0","0.9.1","0.9.1","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybedtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybedtools/README.html