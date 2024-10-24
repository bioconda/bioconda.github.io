:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peaks2utr'
.. highlight: bash

peaks2utr
=========

.. conda:recipe:: peaks2utr
   :replaces_section_title:
   :noindex:

   A robust\, parallelized Python CLI for annotating three\_prime\_UTR

   :homepage: https://github.com/haessar/peaks2utr
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`peaks2utr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaks2utr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peaks2utr/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btad112`

   


.. conda:package:: peaks2utr

   |downloads_peaks2utr| |docker_peaks2utr|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.0-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  </span></summary>
      

      ``1.4.0-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends asgiref: 
   :depends gffutils: ``0.10.1``
   :depends importlib-resources: 
   :depends macs2: ``2.2.9.1``
   :depends numpy: ``>=1.21.4``
   :depends psutil: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: ``>=3.8,<3.12``
   :depends requests: 
   :depends tqdm: 
   :depends typing-extensions: 
   :depends zipp: 
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

      mamba install peaks2utr

   and update with::

      mamba update peaks2utr

  To create a new environment, run::

      mamba create --name myenvname peaks2utr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/peaks2utr:<tag>

   (see `peaks2utr/tags`_ for valid values for ``<tag>``)


.. |downloads_peaks2utr| image:: https://img.shields.io/conda/dn/bioconda/peaks2utr.svg?style=flat
   :target: https://anaconda.org/bioconda/peaks2utr
   :alt:   (downloads)
.. |docker_peaks2utr| image:: https://quay.io/repository/biocontainers/peaks2utr/status
   :target: https://quay.io/repository/biocontainers/peaks2utr
.. _`peaks2utr/tags`: https://quay.io/repository/biocontainers/peaks2utr?tab=tags


.. raw:: html

    <script>
        var package = "peaks2utr";
        var versions = ["1.4.0","1.3.3","1.3.2","1.3.0","1.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peaks2utr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peaks2utr/README.html