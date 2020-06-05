:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selene-sdk'
.. highlight: bash

selene-sdk
==========

.. conda:recipe:: selene-sdk
   :replaces_section_title:
   :noindex:

   Framework for developing sequence\-level deep learning networks.

   :homepage: https://github.com/FunctionLab/selene
   :license: BSD 3-clause clear
   :recipe: /`selene-sdk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selene-sdk/meta.yaml>`_

   


.. conda:package:: selene-sdk

   |downloads_selene-sdk| |docker_selene-sdk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.3.0-2</code>,  </span></summary>
      

      ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends h5py: 
   :depends libgcc-ng: ``>=7.3.0``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pyfaidx: 
   :depends pytabix: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends pyyaml: ``>=5.1``
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends statsmodels: 
   :depends torchvision: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selene-sdk

   and update with::

      conda update selene-sdk

   or use the docker container::

      docker pull quay.io/biocontainers/selene-sdk:<tag>

   (see `selene-sdk/tags`_ for valid values for ``<tag>``)


.. |downloads_selene-sdk| image:: https://img.shields.io/conda/dn/bioconda/selene-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/selene-sdk
   :alt:   (downloads)
.. |docker_selene-sdk| image:: https://quay.io/repository/biocontainers/selene-sdk/status
   :target: https://quay.io/repository/biocontainers/selene-sdk
.. _`selene-sdk/tags`: https://quay.io/repository/biocontainers/selene-sdk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selene-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selene-sdk/README.html