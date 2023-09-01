:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-disambiguate'
.. highlight: bash

ngs-disambiguate
================

.. conda:recipe:: ngs-disambiguate
   :replaces_section_title:
   :noindex:

   Disambiguation algorithm for reads aligned to human and mouse genomes using Tophat or BWA mem

   :homepage: https://github.com/AstraZeneca-NGS/disambiguate
   :license: MIT
   :recipe: /`ngs-disambiguate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-disambiguate/meta.yaml>`_

   


.. conda:package:: ngs-disambiguate

   |downloads_ngs-disambiguate| |docker_ngs-disambiguate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2018.05.03-7</code>,  <code>2018.05.03-6</code>,  <code>2018.05.03-5</code>,  <code>2018.05.03-4</code>,  <code>2018.05.03-3</code>,  <code>2018.05.03-2</code>,  <code>2018.05.03-1</code>,  <code>2018.05.03-0</code>,  <code>2016.11.10-0</code>,  </span></summary>
      

      ``2018.05.03-7``,  ``2018.05.03-6``,  ``2018.05.03-5``,  ``2018.05.03-4``,  ``2018.05.03-3``,  ``2018.05.03-2``,  ``2018.05.03-1``,  ``2018.05.03-0``,  ``2016.11.10-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install ngs-disambiguate

   and update with::

      mamba update ngs-disambiguate

  To create a new environment, run::

      mamba create --name myenvname ngs-disambiguate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ngs-disambiguate:<tag>

   (see `ngs-disambiguate/tags`_ for valid values for ``<tag>``)


.. |downloads_ngs-disambiguate| image:: https://img.shields.io/conda/dn/bioconda/ngs-disambiguate.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-disambiguate
   :alt:   (downloads)
.. |docker_ngs-disambiguate| image:: https://quay.io/repository/biocontainers/ngs-disambiguate/status
   :target: https://quay.io/repository/biocontainers/ngs-disambiguate
.. _`ngs-disambiguate/tags`: https://quay.io/repository/biocontainers/ngs-disambiguate?tab=tags


.. raw:: html

    <script>
        var package = "ngs-disambiguate";
        var versions = ["2018.05.03","2018.05.03","2018.05.03","2018.05.03","2018.05.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-disambiguate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-disambiguate/README.html