:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panaroo'
.. highlight: bash

panaroo
=======

.. conda:recipe:: panaroo
   :replaces_section_title:
   :noindex:

   panaroo \- an updated pipeline for pangenome investigation

   :homepage: https://gtonkinhill.github.io/panaroo
   :documentation: https://gtonkinhill.github.io/panaroo/#/gettingstarted/quickstart
   
   :license: MIT / MIT
   :recipe: /`panaroo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo/meta.yaml>`_

   


.. conda:package:: panaroo

   |downloads_panaroo| |docker_panaroo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.4.0-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.0-0</code>,  <code>1.2.10-0</code>,  <code>1.2.9-0</code>,  </span></summary>
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.7-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-1``,  ``1.2.2-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biocode: 
   :depends biopython: 
   :depends cd-hit: 
   :depends dendropy: 
   :depends gffutils: 
   :depends intbitset: 
   :depends joblib: 
   :depends mafft: 
   :depends mash: 
   :depends matplotlib-base: 
   :depends mkl: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends plotly: 
   :depends prank: 
   :depends prokka: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install panaroo

   and update with::

      mamba update panaroo

  To create a new environment, run::

      mamba create --name myenvname panaroo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/panaroo:<tag>

   (see `panaroo/tags`_ for valid values for ``<tag>``)


.. |downloads_panaroo| image:: https://img.shields.io/conda/dn/bioconda/panaroo.svg?style=flat
   :target: https://anaconda.org/bioconda/panaroo
   :alt:   (downloads)
.. |docker_panaroo| image:: https://quay.io/repository/biocontainers/panaroo/status
   :target: https://quay.io/repository/biocontainers/panaroo
.. _`panaroo/tags`: https://quay.io/repository/biocontainers/panaroo?tab=tags


.. raw:: html

    <script>
        var package = "panaroo";
        var versions = ["1.4.2","1.4.1","1.4.0","1.3.4","1.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panaroo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panaroo/README.html