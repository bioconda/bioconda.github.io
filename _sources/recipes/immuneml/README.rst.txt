:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'immuneml'
.. highlight: bash

immuneml
========

.. conda:recipe:: immuneml
   :replaces_section_title:
   :noindex:

   immuneML is a software platform for machine learning analysis of immune receptor repertoires.

   :homepage: https://github.com/uio-bmi/immuneML
   :documentation: https://docs.immuneml.uio.no/
   
   :license: AGPL / APGL-3.0-only
   :recipe: /`immuneml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/immuneml/meta.yaml>`_

   


.. conda:package:: immuneml

   |downloads_immuneml| |docker_immuneml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.9-0</code>,  <code>3.0.8-0</code>,  <code>3.0.7-0</code>,  <code>3.0.6-1</code>,  <code>3.0.6-0</code>,  <code>3.0.5-0</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>2.2.6-1</code>,  </span></summary>
      

      ``3.0.9-0``,  ``3.0.8-0``,  ``3.0.7-0``,  ``3.0.6-1``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``2.2.6-1``,  ``2.2.6-0``,  ``2.2.5-1``,  ``2.2.5-0``,  ``2.2.4-1``,  ``2.2.4-0``,  ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.6-0``,  ``2.0.5-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.0-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends airr: ``>=1,<1.4``
   :depends bionumpy: ``>=0.2.31``
   :depends dill: ``>=0.3``
   :depends editdistance: 
   :depends gensim: ``>=4``
   :depends keras: ``>=2.12.0``
   :depends libgcc: ``>=13``
   :depends logomaker: ``>=0.8``
   :depends matplotlib-base: ``>=3.1``
   :depends matplotlib-venn: ``>=0.11``
   :depends npstructures: 
   :depends numpy: ``<2.0.0``
   :depends olga: ``>=1.2.4``
   :depends pandas: 
   :depends plotly: ``>=4``
   :depends pystache: 
   :depends pytest: ``>=4``
   :depends python_abi: ``3.10.* *_cp310``
   :depends pytorch: ``>=2.* cpu_*``
   :depends pyyaml: ``>=5.3``
   :depends regex: 
   :depends scikit-learn: ``>=0.23``
   :depends scipy: ``<1.13``
   :depends tensorflow: ``>=2.12.0``
   :depends tzlocal: 
   :depends umap-learn: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install immuneml

   and update with::

      mamba update immuneml

  To create a new environment, run::

      mamba create --name myenvname immuneml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/immuneml:<tag>

   (see `immuneml/tags`_ for valid values for ``<tag>``)


.. |downloads_immuneml| image:: https://img.shields.io/conda/dn/bioconda/immuneml.svg?style=flat
   :target: https://anaconda.org/bioconda/immuneml
   :alt:   (downloads)
.. |docker_immuneml| image:: https://quay.io/repository/biocontainers/immuneml/status
   :target: https://quay.io/repository/biocontainers/immuneml
.. _`immuneml/tags`: https://quay.io/repository/biocontainers/immuneml?tab=tags


.. raw:: html

    <script>
        var package = "immuneml";
        var versions = ["3.0.9","3.0.8","3.0.7","3.0.6","3.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/immuneml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/immuneml/README.html