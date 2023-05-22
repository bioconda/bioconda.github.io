:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'instrain'
.. highlight: bash

instrain
========

.. conda:recipe:: instrain
   :replaces_section_title:
   :noindex:

   Calculation of strain\-level metrics

   :homepage: https://github.com/MrOlm/inStrain
   :license: MIT / MIT
   :recipe: /`instrain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instrain/meta.yaml>`_

   


.. conda:package:: instrain

   |downloads_instrain| |docker_instrain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.7.5-0</code>,  <code>1.7.1-1</code>,  <code>1.7.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.7.5-0``,  ``1.7.1-1``,  ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.4.0-0``,  ``1.3.11-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.2.14-0``,  ``1.2.13-0``,  ``1.2.12-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: ``<=1.74``
   :depends h5py: 
   :depends lmfit: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: 
   :depends pandas: ``>=0.25,!=1.1.3``
   :depends psutil: 
   :depends pysam: ``>=0.15``
   :depends pytest: 
   :depends python: ``>=3.4``
   :depends seaborn: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install instrain

   and update with::

      conda update instrain

   or use the docker container::

      docker pull quay.io/biocontainers/instrain:<tag>

   (see `instrain/tags`_ for valid values for ``<tag>``)


.. |downloads_instrain| image:: https://img.shields.io/conda/dn/bioconda/instrain.svg?style=flat
   :target: https://anaconda.org/bioconda/instrain
   :alt:   (downloads)
.. |docker_instrain| image:: https://quay.io/repository/biocontainers/instrain/status
   :target: https://quay.io/repository/biocontainers/instrain
.. _`instrain/tags`: https://quay.io/repository/biocontainers/instrain?tab=tags


.. raw:: html

    <script>
        var package = "instrain";
        var versions = ["1.7.5","1.7.1","1.7.1","1.7.0","1.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/instrain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/instrain/README.html