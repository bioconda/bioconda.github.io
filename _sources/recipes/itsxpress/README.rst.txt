:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'itsxpress'
.. highlight: bash

itsxpress
=========

.. conda:recipe:: itsxpress
   :replaces_section_title:
   :noindex:

   ITSxpress\: Software to rapidly trim the Internally Transcribed Spacer \(ITS\) region from FASTQ files

   :homepage: http://github.com/usda-ars-gbru/itsxpress
   :license: PUBLIC-DOMAIN / CC0-1.0
   :recipe: /`itsxpress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/itsxpress/meta.yaml>`_
   :links: biotools: :biotools:`ITSxpress`, doi: :doi:`10.5281/zenodo.1304349`, doi: :doi:`10.12688/f1000research.15704.1`

   


.. conda:package:: itsxpress

   |downloads_itsxpress| |docker_itsxpress|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.2-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.8.1-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.8.1-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.7.2-1``,  ``1.7.2-0``,  ``1.7.1-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.5.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.79``
   :depends hmmer: ``3.1b2.*``
   :depends pip: 
   :depends python: ``>=3.8``
   :depends pyzstd: 
   :depends vsearch: ``2.22.1.*``
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

      mamba install itsxpress

   and update with::

      mamba update itsxpress

  To create a new environment, run::

      mamba create --name myenvname itsxpress

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/itsxpress:<tag>

   (see `itsxpress/tags`_ for valid values for ``<tag>``)


.. |downloads_itsxpress| image:: https://img.shields.io/conda/dn/bioconda/itsxpress.svg?style=flat
   :target: https://anaconda.org/bioconda/itsxpress
   :alt:   (downloads)
.. |docker_itsxpress| image:: https://quay.io/repository/biocontainers/itsxpress/status
   :target: https://quay.io/repository/biocontainers/itsxpress
.. _`itsxpress/tags`: https://quay.io/repository/biocontainers/itsxpress?tab=tags


.. raw:: html

    <script>
        var package = "itsxpress";
        var versions = ["2.1.1","2.1.0","2.0.2","2.0.1","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/itsxpress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/itsxpress/README.html