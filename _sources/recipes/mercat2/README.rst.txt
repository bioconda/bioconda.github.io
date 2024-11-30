:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mercat2'
.. highlight: bash

mercat2
=======

.. conda:recipe:: mercat2
   :replaces_section_title:
   :noindex:

   versatile k\-mer counter and diversity estimator for database independent property analysis \(DIPA\) for multi\-omic analysis

   :homepage: https://github.com/raw-lab/mercat2
   :license: BSD / BSD-3-Clause
   :recipe: /`mercat2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mercat2/meta.yaml>`_

   


.. conda:package:: mercat2

   |downloads_mercat2| |docker_mercat2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3-0</code>,  <code>1.2-0</code>,  <code>1.1-0</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.2-1</code>,  <code>0.2-0</code>,  </span></summary>
      

      ``1.4.1-0``,  ``1.4.0-0``,  ``1.3-0``,  ``1.2-0``,  ``1.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.2-1``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends configargparse: 
   :depends dominate: 
   :depends fastp: 
   :depends fastqc: 
   :depends grpcio: ``1.43``
   :depends humanize: 
   :depends metaomestats: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends prodigal: 
   :depends psutil: 
   :depends python: ``>=3.9``
   :depends python-kaleido: 
   :depends ray-core: 
   :depends ray-dashboard: 
   :depends ray-default: 
   :depends ray-tune: 
   :depends scikit-bio: ``0.5.7``
   :depends scikit-learn: 
   :depends scipy: ``1.8.1``
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

      mamba install mercat2

   and update with::

      mamba update mercat2

  To create a new environment, run::

      mamba create --name myenvname mercat2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mercat2:<tag>

   (see `mercat2/tags`_ for valid values for ``<tag>``)


.. |downloads_mercat2| image:: https://img.shields.io/conda/dn/bioconda/mercat2.svg?style=flat
   :target: https://anaconda.org/bioconda/mercat2
   :alt:   (downloads)
.. |docker_mercat2| image:: https://quay.io/repository/biocontainers/mercat2/status
   :target: https://quay.io/repository/biocontainers/mercat2
.. _`mercat2/tags`: https://quay.io/repository/biocontainers/mercat2?tab=tags


.. raw:: html

    <script>
        var package = "mercat2";
        var versions = ["1.4.1","1.4.0","1.3","1.2","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mercat2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mercat2/README.html