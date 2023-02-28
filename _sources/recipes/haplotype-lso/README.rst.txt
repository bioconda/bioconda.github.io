:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haplotype-lso'
.. highlight: bash

haplotype-lso
=============

.. conda:recipe:: haplotype-lso
   :replaces_section_title:
   :noindex:

   Haplotype Candidatus Liberibacter solanacearum \(Lso\) samples from targeted amplicon capillary sequencing data

   :homepage: https://github.com/holtgrewe/haplotype-lso
   :license: MIT / MIT
   :recipe: /`haplotype-lso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotype-lso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haplotype-lso/meta.yaml>`_

   


.. conda:package:: haplotype-lso

   |downloads_haplotype-lso| |docker_haplotype-lso|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.4-3</code>,  <code>0.4.4-2</code>,  <code>0.4.4-1</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.4-0</code>,  </span></summary>
      

      ``0.4.4-3``,  ``0.4.4-2``,  ``0.4.4-1``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends attrs: 
   :depends bioconvert: 
   :depends biopython: ``>=1.75``
   :depends blast: 
   :depends dash: ``>=1.0``
   :depends dash-bootstrap-components: 
   :depends dash-core-components: 
   :depends dash-html-components: 
   :depends dash-renderer: 
   :depends dash-table: 
   :depends flask: 
   :depends logzero: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends python: 
   :depends scipy: 
   :depends seqtk: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install haplotype-lso

   and update with::

      conda update haplotype-lso

   or use the docker container::

      docker pull quay.io/biocontainers/haplotype-lso:<tag>

   (see `haplotype-lso/tags`_ for valid values for ``<tag>``)


.. |downloads_haplotype-lso| image:: https://img.shields.io/conda/dn/bioconda/haplotype-lso.svg?style=flat
   :target: https://anaconda.org/bioconda/haplotype-lso
   :alt:   (downloads)
.. |docker_haplotype-lso| image:: https://quay.io/repository/biocontainers/haplotype-lso/status
   :target: https://quay.io/repository/biocontainers/haplotype-lso
.. _`haplotype-lso/tags`: https://quay.io/repository/biocontainers/haplotype-lso?tab=tags


.. raw:: html

    <script>
        var package = "haplotype-lso";
        var versions = ["0.4.4","0.4.4","0.4.4","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haplotype-lso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haplotype-lso/README.html