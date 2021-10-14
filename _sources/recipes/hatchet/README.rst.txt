:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hatchet'
.. highlight: bash

hatchet
=======

.. conda:recipe:: hatchet
   :replaces_section_title:
   :noindex:

   Holistic Allele\-specific Tumor Copy\-number Heterogeneity

   :homepage: https://github.com/raphael-group/hatchet
   :license: BSD-3
   :recipe: /`hatchet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hatchet/meta.yaml>`_

   HATCHet is an algorithm to infer allele and clone\-specific copy\-number
   aberrations \(CNAs\)\, clone proportions\, and whole\-genome duplications
   \(WGD\) for several tumor clones jointly from multiple bulk\-tumor samples
   of the same patient or from a single bulk\-tumor sample.


.. conda:package:: hatchet

   |downloads_hatchet| |docker_hatchet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.9-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.3-0</code>,  </span></summary>
      

      ``0.4.9-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-3``,  ``0.2.9-1``,  ``0.2.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends bcftools: 
   :depends biopython: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends matplotlib-base: 
   :depends pandas: 
   :depends psutil: 
   :depends pyomo: 
   :depends pysam: 
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends requests: 
   :depends samtools: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hatchet

   and update with::

      conda update hatchet

   or use the docker container::

      docker pull quay.io/biocontainers/hatchet:<tag>

   (see `hatchet/tags`_ for valid values for ``<tag>``)


.. |downloads_hatchet| image:: https://img.shields.io/conda/dn/bioconda/hatchet.svg?style=flat
   :target: https://anaconda.org/bioconda/hatchet
   :alt:   (downloads)
.. |docker_hatchet| image:: https://quay.io/repository/biocontainers/hatchet/status
   :target: https://quay.io/repository/biocontainers/hatchet
.. _`hatchet/tags`: https://quay.io/repository/biocontainers/hatchet?tab=tags


.. raw:: html

    <script>
        var package = "hatchet";
        var versions = ["0.4.9","0.4.7","0.4.6","0.4.5","0.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hatchet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hatchet/README.html