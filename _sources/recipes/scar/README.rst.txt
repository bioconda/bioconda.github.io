:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scar'
.. highlight: bash

scar
====

.. conda:recipe:: scar
   :replaces_section_title:
   :noindex:

   scAR \(single cell Ambient Remover\) is a package for denoising multiple single cell omics data.

   :homepage: https://github.com/Novartis/scar
   :license: MIT
   :recipe: /`scar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scar/meta.yaml>`_

   


.. conda:package:: scar

   |downloads_scar| |docker_scar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.0-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-0</code>,  <code>0.3.5-0</code>,  <code>0.3.4-0</code>,  <code>0.3.2-0</code>,  </span></summary>
      

      ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: 
   :depends cudatoolkit: ``>=11.1``
   :depends numpy: ``<=1.21``
   :depends pandas: ``>=1.3.4``
   :depends pyro-ppl: ``>=1.8.0``
   :depends python: ``>=3.8.6``
   :depends pytorch: ``>=1.10.0``
   :depends scanpy: 
   :depends scikit-learn: ``>=1.0.1``
   :depends seaborn: ``>=0.11.2``
   :depends setuptools: ``<=59.5.0``
   :depends tensorboard: ``>=2.2.1``
   :depends torchvision: ``>=0.9.0``
   :depends tqdm: ``>=4.62.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scar

   and update with::

      conda update scar

   or use the docker container::

      docker pull quay.io/biocontainers/scar:<tag>

   (see `scar/tags`_ for valid values for ``<tag>``)


.. |downloads_scar| image:: https://img.shields.io/conda/dn/bioconda/scar.svg?style=flat
   :target: https://anaconda.org/bioconda/scar
   :alt:   (downloads)
.. |docker_scar| image:: https://quay.io/repository/biocontainers/scar/status
   :target: https://quay.io/repository/biocontainers/scar
.. _`scar/tags`: https://quay.io/repository/biocontainers/scar?tab=tags


.. raw:: html

    <script>
        var package = "scar";
        var versions = ["0.5.0","0.4.4","0.4.3","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scar/README.html