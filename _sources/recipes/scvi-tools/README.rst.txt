:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvi-tools'
.. highlight: bash

scvi-tools
==========

.. conda:recipe:: scvi-tools
   :replaces_section_title:
   :noindex:

   Deep probabilistic analysis of single\-cell omics data.

   :homepage: https://scvi-tools.org/
   :documentation: https://docs.scvi-tools.org/en/stable/
   
   :developer docs: https://github.com/YosefLab/scvi-tools
   :license: BSD / BSD-3-Clause
   :recipe: /`scvi-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools/meta.yaml>`_

   


.. conda:package:: scvi-tools

   |downloads_scvi-tools| |docker_scvi-tools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.2-0</code>,  <code>0.13.0-0</code>,  <code>0.12.2-0</code>,  <code>0.11.0-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``0.14.2-0``,  ``0.13.0-0``,  ``0.12.2-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.7.0b0-0``,  ``0.7.0a6-0``,  ``0.7.0a5-0``,  ``0.7.0a4-1``,  ``0.7.0a4-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.7.5``
   :depends docrep: ``>=0.3.2``
   :depends h5py: ``>=2.9.0``
   :depends ipywidgets: ``>=7.5.1``
   :depends numba: ``>=0.41.0``
   :depends numpy: ``>=1.17.0``
   :depends openpyxl: ``>=3.0``
   :depends pandas: ``>=1.0``
   :depends pyro-ppl: ``>=1.6.0``
   :depends python: ``>=3.7``
   :depends pytorch: ``>=1.8.0``
   :depends pytorch-lightning: ``>=1.3,<1.4``
   :depends rich: ``>=9.12.4``
   :depends scikit-learn: ``>=0.21.2``
   :depends tqdm: ``>=4.56.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvi-tools

   and update with::

      conda update scvi-tools

   or use the docker container::

      docker pull quay.io/biocontainers/scvi-tools:<tag>

   (see `scvi-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_scvi-tools| image:: https://img.shields.io/conda/dn/bioconda/scvi-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/scvi-tools
   :alt:   (downloads)
.. |docker_scvi-tools| image:: https://quay.io/repository/biocontainers/scvi-tools/status
   :target: https://quay.io/repository/biocontainers/scvi-tools
.. _`scvi-tools/tags`: https://quay.io/repository/biocontainers/scvi-tools?tab=tags


.. raw:: html

    <script>
        var package = "scvi-tools";
        var versions = ["0.14.2","0.13.0","0.12.2","0.11.0","0.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi-tools/README.html