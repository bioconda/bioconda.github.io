:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepac'
.. highlight: bash

deepac
======

.. conda:recipe:: deepac
   :replaces_section_title:
   :noindex:

   Predicting pathogenic potentials of novel DNA with reverse\-complement neural networks.

   :homepage: https://gitlab.com/rki_bioinformatics/DeePaC
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :license: MIT / MIT
   :recipe: /`deepac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac/meta.yaml>`_

   


.. conda:package:: deepac

   |downloads_deepac| |docker_deepac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.13.6-0</code>,  <code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  <code>0.12.0-0</code>,  <code>0.11.0-0</code>,  </span></summary>
      

      ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.29``
   :depends biopython: ``>=1.78``
   :depends h5py: ``2.10``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numpy: ``>=1.17``
   :depends pandas: ``>=1.0.3``
   :depends psutil: ``>=5.6.7``
   :depends pybedtools: ``>=0.8.1``
   :depends python: ``>=3.6``
   :depends python-wget: ``>=3.2``
   :depends requests: ``>=2.24``
   :depends scikit-learn: ``>=0.22.1``
   :depends scipy: ``>=1.4.1``
   :depends seaborn: ``>=0.11``
   :depends shap: ``>=0.35``
   :depends statsmodels: ``>=0.11``
   :depends tensorboard: ``>=2.1``
   :depends tensorflow: ``>=2.1``
   :depends tqdm: ``>=4.49``
   :depends weblogo: ``>=3.7.4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepac

   and update with::

      conda update deepac

   or use the docker container::

      docker pull quay.io/biocontainers/deepac:<tag>

   (see `deepac/tags`_ for valid values for ``<tag>``)


.. |downloads_deepac| image:: https://img.shields.io/conda/dn/bioconda/deepac.svg?style=flat
   :target: https://anaconda.org/bioconda/deepac
   :alt:   (downloads)
.. |docker_deepac| image:: https://quay.io/repository/biocontainers/deepac/status
   :target: https://quay.io/repository/biocontainers/deepac
.. _`deepac/tags`: https://quay.io/repository/biocontainers/deepac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepac/README.html