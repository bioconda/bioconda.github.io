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

         <details><summary><span class="truncated-version-list"><code>0.4.1-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.7-0</code>,  </span></summary>
      

      ``0.4.1-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``v0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends adjusttext: 
   :depends dask: 
   :depends genomepy: ``>=0.14.0``
   :depends gimmemotifs-minimal: ``>=0.18.0``
   :depends loguru: 
   :depends matplotlib-base: ``>=3.3``
   :depends networkx: 
   :depends numpy: ``>=1.6``
   :depends openpyxl: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pydot: ``>=1.4.1``
   :depends pygraphviz: ``>=1.7``
   :depends pyranges: 
   :depends pytables: 
   :depends python: ``>=3.7``
   :depends scikit-learn: 
   :depends scipy: ``>=1.9``
   :depends seaborn-base: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ananse

   and update with::

      mamba update ananse

  To create a new environment, run::

      mamba create --name myenvname ananse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["0.4.1","0.4.0","0.4.0","0.3.0","0.2.2"];
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