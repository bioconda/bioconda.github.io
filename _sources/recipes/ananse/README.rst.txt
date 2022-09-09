:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ananse'
.. highlight: bash

ananse
======

.. conda:recipe:: ananse
   :replaces_section_title:
   :noindex:

   ANANSE\: ANalysis Algorithm for Networks Specified by Enhancers \- Prediction of key transcription factors in cell fate determination using enhancer networks

   :homepage: https://github.com/vanheeringen-lab/ANANSE
   :license: MIT / MIT License
   :recipe: /`ananse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ananse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ananse/meta.yaml>`_
   :links: biotools: :biotools:`ananse`

   


.. conda:package:: ananse

   |downloads_ananse| |docker_ananse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.7-0</code>,  <code>0.1.5-0</code>,  <code>0.1.4-0</code>,  </span></summary>
      

      ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``v0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: ``>=0.7.3``
   :depends dask: ``>=2022.8.1``
   :depends genomepy: ``>=0.14.0``
   :depends gimmemotifs-minimal: ``>=0.17.1``
   :depends loguru: ``>=0.6.0``
   :depends matplotlib-base: ``>=3.5.3``
   :depends networkx: ``>=2.8.6``
   :depends numpy: ``>=1.23.2``
   :depends openpyxl: ``>=3.0.9``
   :depends pandas: ``>=1.1.5``
   :depends pybedtools: ``>=0.9.0``
   :depends pydot: ``>=1.4.2``
   :depends pygraphviz: ``>=1.10``
   :depends pyranges: ``>=0.0.117``
   :depends pytables: ``>=3.7.0``
   :depends python: 
   :depends scikit-learn: ``>=1.1.2``
   :depends scipy: ``>=1.9.0``
   :depends seaborn-base: ``>=0.11.2``
   :depends tqdm: ``>=4.64.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ananse

   and update with::

      conda update ananse

   or use the docker container::

      docker pull quay.io/biocontainers/ananse:<tag>

   (see `ananse/tags`_ for valid values for ``<tag>``)


.. |downloads_ananse| image:: https://img.shields.io/conda/dn/bioconda/ananse.svg?style=flat
   :target: https://anaconda.org/bioconda/ananse
   :alt:   (downloads)
.. |docker_ananse| image:: https://quay.io/repository/biocontainers/ananse/status
   :target: https://quay.io/repository/biocontainers/ananse
.. _`ananse/tags`: https://quay.io/repository/biocontainers/ananse?tab=tags


.. raw:: html

    <script>
        var package = "ananse";
        var versions = ["0.4.0","0.3.0","0.2.2","0.2.2","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ananse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ananse/README.html