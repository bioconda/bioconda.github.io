:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isoquant'
.. highlight: bash

isoquant
========

.. conda:recipe:: isoquant
   :replaces_section_title:
   :noindex:

   IsoQuant is a tool for reference\-based analysis of long RNA reads\, such as gene\/transcript quantification and discovery.

   :homepage: https://github.com/ablab/IsoQuant
   :documentation: https://ablab.github.io/IsoQuant
   
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`isoquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isoquant/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-022-01565-y`

   


.. conda:package:: isoquant

   |downloads_isoquant| |docker_isoquant|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.0-0</code>,  <code>3.6.3-0</code>,  <code>3.6.2-0</code>,  <code>3.6.1-0</code>,  <code>3.6.0-0</code>,  <code>3.5.2-0</code>,  <code>3.5.1-0</code>,  <code>3.5.0-0</code>,  <code>3.4.2-0</code>,  </span></summary>
      

      ``3.7.0-0``,  ``3.6.3-0``,  ``3.6.2-0``,  ``3.6.1-0``,  ``3.6.0-0``,  ``3.5.2-0``,  ``3.5.1-0``,  ``3.5.0-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.2-1``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends argcomplete: ``>=1.11.1``
   :depends argh: ``>=0.26.2``
   :depends gffutils: ``>=0.10.1``
   :depends minimap2: ``>=2.18``
   :depends numpy: ``>=1.18.1``
   :depends packaging: 
   :depends pandas: ``>=1.0.1``
   :depends pyfaidx: ``>=0.7``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.8``
   :depends pyyaml: ``>=5.4``
   :depends samtools: ``>=1.14``
   :depends scipy: ``>=1.4.1``
   :depends seaborn: ``>=0.10.0``
   :depends simplejson: ``>=3.17.0``
   :depends six: ``>=1.14.0``
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

      mamba install isoquant

   and update with::

      mamba update isoquant

  To create a new environment, run::

      mamba create --name myenvname isoquant

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/isoquant:<tag>

   (see `isoquant/tags`_ for valid values for ``<tag>``)


.. |downloads_isoquant| image:: https://img.shields.io/conda/dn/bioconda/isoquant.svg?style=flat
   :target: https://anaconda.org/bioconda/isoquant
   :alt:   (downloads)
.. |docker_isoquant| image:: https://quay.io/repository/biocontainers/isoquant/status
   :target: https://quay.io/repository/biocontainers/isoquant
.. _`isoquant/tags`: https://quay.io/repository/biocontainers/isoquant?tab=tags


.. raw:: html

    <script>
        var package = "isoquant";
        var versions = ["3.7.0","3.6.3","3.6.2","3.6.1","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isoquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isoquant/README.html