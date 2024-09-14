:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kleborate'
.. highlight: bash

kleborate
=========

.. conda:recipe:: kleborate
   :replaces_section_title:
   :noindex:

   Kleborate\: a tool for typing and screening pathogen genome assemblies

   :homepage: https://kleboratemodular.readthedocs.io
   :developer docs: https://github.com/klebgenomics/KleborateModular
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kleborate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41467-021-24448-3`, doi: :doi:`10.1099/mgen.0.000102`, biotools: :biotools:`kleborate`, usegalaxy-eu: :usegalaxy-eu:`kleborate`

   


.. conda:package:: kleborate

   |downloads_kleborate| |docker_kleborate|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.9-0</code>,  <code>3.0.8-0</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>2.3.2-0</code>,  <code>2.3.1-0</code>,  <code>2.3.0-0</code>,  <code>2.2.0-0</code>,  <code>2.1.0-1</code>,  </span></summary>
      

      ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.0-0``,  ``2.1.0-1``,  ``2.1.0-0``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``>=1.83``
   :depends dna_features_viewer: 
   :depends kaptive: 
   :depends mash: 
   :depends minimap2: 
   :depends numpy: ``>=1.22``
   :depends python: ``>=3.9``
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

      mamba install kleborate

   and update with::

      mamba update kleborate

  To create a new environment, run::

      mamba create --name myenvname kleborate

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kleborate:<tag>

   (see `kleborate/tags`_ for valid values for ``<tag>``)


.. |downloads_kleborate| image:: https://img.shields.io/conda/dn/bioconda/kleborate.svg?style=flat
   :target: https://anaconda.org/bioconda/kleborate
   :alt:   (downloads)
.. |docker_kleborate| image:: https://quay.io/repository/biocontainers/kleborate/status
   :target: https://quay.io/repository/biocontainers/kleborate
.. _`kleborate/tags`: https://quay.io/repository/biocontainers/kleborate?tab=tags


.. raw:: html

    <script>
        var package = "kleborate";
        var versions = ["3.0.9","3.0.8","3.0.6","3.0.5","2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kleborate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kleborate/README.html