:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picrust2'
.. highlight: bash

picrust2
========

.. conda:recipe:: picrust2
   :replaces_section_title:
   :noindex:

   PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

   :homepage: https://github.com/picrust/picrust2
   :license: GNU General Public License v3.0
   :recipe: /`picrust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2/meta.yaml>`_

   


.. conda:package:: picrust2

   |downloads_picrust2| |docker_picrust2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.2-0</code>,  <code>2.5.1-0</code>,  <code>2.5.0-0</code>,  <code>2.4.2-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0_b-0</code>,  <code>2.2.0_b-0</code>,  <code>2.1.4_b-0</code>,  </span></summary>
      

      ``2.5.2-0``,  ``2.5.1-0``,  ``2.5.0-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.0_b-0``,  ``2.2.0_b-0``,  ``2.1.4_b-0``,  ``2.1.3_b-0``,  ``2.1.2_b-0``,  ``2.1.1_b-0``,  ``2.1.0_b-0``,  ``2.0.3_b-0``

      
      .. raw:: html

         </details>
      

   
   :depends biom-format: ``>=2.1.10``
   :depends epa-ng: ``0.3.8.*``
   :depends gappa: ``0.8.0.*``
   :depends glpk: ``>=4.65``
   :depends h5py: ``>=2.10.0``
   :depends hmmer: ``>=3.1b2,<=3.2.1``
   :depends joblib: ``>=1.0.1``
   :depends numpy: ``>=1.19.5``
   :depends pandas: ``>=1.1.5``
   :depends pytest: ``>=4.4.1``
   :depends pytest-cov: ``>=2.6.1``
   :depends python: ``>=3.5,<3.9``
   :depends r-base: ``>=3.5.1``
   :depends r-castor: ``>=1.7.2``
   :depends scipy: ``>=1.2.1``
   :depends sepp: ``4.3.10.*``
   :depends wget: 
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

      mamba install picrust2

   and update with::

      mamba update picrust2

  To create a new environment, run::

      mamba create --name myenvname picrust2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/picrust2:<tag>

   (see `picrust2/tags`_ for valid values for ``<tag>``)


.. |downloads_picrust2| image:: https://img.shields.io/conda/dn/bioconda/picrust2.svg?style=flat
   :target: https://anaconda.org/bioconda/picrust2
   :alt:   (downloads)
.. |docker_picrust2| image:: https://quay.io/repository/biocontainers/picrust2/status
   :target: https://quay.io/repository/biocontainers/picrust2
.. _`picrust2/tags`: https://quay.io/repository/biocontainers/picrust2?tab=tags


.. raw:: html

    <script>
        var package = "picrust2";
        var versions = ["2.5.2","2.5.1","2.5.0","2.4.2","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picrust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picrust2/README.html