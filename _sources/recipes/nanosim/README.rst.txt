:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanosim'
.. highlight: bash

nanosim
=======

.. conda:recipe:: nanosim
   :replaces_section_title:
   :noindex:

   NanoSim is a fast and scalable read simulator for Nanopore sequencing data.

   :homepage: https://github.com/bcgsc/NanoSim
   :license: GPL-3.0
   :recipe: /`nanosim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanosim/meta.yaml>`_
   :links: doi: :doi:`10.1093/gigascience/gix010`, doi: :doi:`10.1093/gigascience/giaa061`

   


.. conda:package:: nanosim

   |downloads_nanosim| |docker_nanosim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.1.0-0</code>,  <code>3.0.2-0</code>,  <code>3.0.0-0</code>,  <code>2.6.0-1</code>,  <code>2.6.0-0</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.2.0-0</code>,  </span></summary>
      

      ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``v1.3.0-0``,  ``v1.2.0-0``,  ``v1.0.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends genometools-genometools: 
   :depends htseq: ``>=0.9.1``
   :depends joblib: 
   :depends last: 
   :depends minimap2: 
   :depends numpy: ``>=1.13.3``
   :depends pybedtools: ``>=0.7.10``
   :depends pysam: ``>=0.13``
   :depends python: 
   :depends samtools: 
   :depends scikit-learn: ``>=0.20.0,<=0.22.1``
   :depends scipy: ``>=1.0.0``
   :depends six: ``>=1.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanosim

   and update with::

      conda update nanosim

   or use the docker container::

      docker pull quay.io/biocontainers/nanosim:<tag>

   (see `nanosim/tags`_ for valid values for ``<tag>``)


.. |downloads_nanosim| image:: https://img.shields.io/conda/dn/bioconda/nanosim.svg?style=flat
   :target: https://anaconda.org/bioconda/nanosim
   :alt:   (downloads)
.. |docker_nanosim| image:: https://quay.io/repository/biocontainers/nanosim/status
   :target: https://quay.io/repository/biocontainers/nanosim
.. _`nanosim/tags`: https://quay.io/repository/biocontainers/nanosim?tab=tags


.. raw:: html

    <script>
        var package = "nanosim";
        var versions = ["3.1.0","3.0.2","3.0.0","2.6.0","2.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanosim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanosim/README.html