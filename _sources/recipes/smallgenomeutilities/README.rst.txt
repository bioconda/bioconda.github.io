:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smallgenomeutilities'
.. highlight: bash

smallgenomeutilities
====================

.. conda:recipe:: smallgenomeutilities/0.3.0
   :replaces_section_title:
   :noindex:

   A collection of scripts that are useful for dealing with viral RNA NGS data.

   :homepage: https://github.com/cbg-ethz/smallgenomeutilities
   :license: GPL2 / GNU General Public License v2 or later (GPLv2+)
   :recipe: /`smallgenomeutilities <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities>`_/`0.3.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/0.3.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smallgenomeutilities/0.3.0/meta.yaml>`_

   


.. conda:package:: smallgenomeutilities

   |downloads_smallgenomeutilities| |docker_smallgenomeutilities|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-2</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  </span></summary>
      

      ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1-1``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcbio-gff: 
   :depends biopython: 
   :depends mafft: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends progress: 
   :depends pysam: ``>=0.16``
   :depends pysamstats: 
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smallgenomeutilities

   and update with::

      conda update smallgenomeutilities

   or use the docker container::

      docker pull quay.io/biocontainers/smallgenomeutilities:<tag>

   (see `smallgenomeutilities/tags`_ for valid values for ``<tag>``)


.. |downloads_smallgenomeutilities| image:: https://img.shields.io/conda/dn/bioconda/smallgenomeutilities.svg?style=flat
   :target: https://anaconda.org/bioconda/smallgenomeutilities
   :alt:   (downloads)
.. |docker_smallgenomeutilities| image:: https://quay.io/repository/biocontainers/smallgenomeutilities/status
   :target: https://quay.io/repository/biocontainers/smallgenomeutilities
.. _`smallgenomeutilities/tags`: https://quay.io/repository/biocontainers/smallgenomeutilities?tab=tags


.. raw:: html

    <script>
        var package = "smallgenomeutilities";
        var versions = ["0.3.6","0.3.5","0.3.4","0.3.2","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smallgenomeutilities/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smallgenomeutilities/README.html