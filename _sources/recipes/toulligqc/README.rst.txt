:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'toulligqc'
.. highlight: bash

toulligqc
=========

.. conda:recipe:: toulligqc
   :replaces_section_title:
   :noindex:

   A post sequencing QC tool for Oxford Nanopore sequencers

   :homepage: https://github.com/GenomicParisCentre/toulligQC
   :license: CECILL-2.1
   :recipe: /`toulligqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/toulligqc/meta.yaml>`_

   


.. conda:package:: toulligqc

   |downloads_toulligqc| |docker_toulligqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-0</code>,  <code>2.3-0</code>,  <code>2.2.3-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1-0</code>,  <code>2.0.1-0</code>,  </span></summary>
      

      ``2.4-0``,  ``2.3-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.1-0``,  ``2.1-0``,  ``2.0.1-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``,  ``0.10-0``,  ``0.9-2``,  ``0.9-0``,  ``0.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: ``>=2.10``
   :depends matplotlib-base: ``>=3.1.2``
   :depends numpy: ``>=1.17.4``
   :depends pandas: ``>=0.25.3``
   :depends plotly: ``>=4.5.0``
   :depends python: ``>=3.8``
   :depends scikit-learn: ``>=0.22``
   :depends scipy: ``>=1.3.3``
   :depends seaborn: ``>=0.10``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install toulligqc

   and update with::

      conda update toulligqc

   or use the docker container::

      docker pull quay.io/biocontainers/toulligqc:<tag>

   (see `toulligqc/tags`_ for valid values for ``<tag>``)


.. |downloads_toulligqc| image:: https://img.shields.io/conda/dn/bioconda/toulligqc.svg?style=flat
   :target: https://anaconda.org/bioconda/toulligqc
   :alt:   (downloads)
.. |docker_toulligqc| image:: https://quay.io/repository/biocontainers/toulligqc/status
   :target: https://quay.io/repository/biocontainers/toulligqc
.. _`toulligqc/tags`: https://quay.io/repository/biocontainers/toulligqc?tab=tags


.. raw:: html

    <script>
        var package = "toulligqc";
        var versions = ["2.4","2.3","2.2.3","2.2.2","2.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/toulligqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/toulligqc/README.html