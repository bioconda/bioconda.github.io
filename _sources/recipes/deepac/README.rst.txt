:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepac'
.. highlight: bash

deepac
======

.. conda:recipe:: deepac
   :replaces_section_title:
   :noindex:

   Predicting pathogenic potentials of novel DNA with reverse\-complement neural networks.

   :homepage: https://gitlab.com/dacs-hpi/deepac
   :documentation: https://rki_bioinformatics.gitlab.io/DeePaC/
   
   :license: MIT / MIT
   :recipe: /`deepac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepac/meta.yaml>`_

   


.. conda:package:: deepac

   |downloads_deepac| |docker_deepac|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.14.1-0</code>,  <code>0.14.0-0</code>,  <code>0.13.6-0</code>,  <code>0.13.5-0</code>,  <code>0.13.4-0</code>,  <code>0.13.3-0</code>,  <code>0.13.2-0</code>,  <code>0.12.2-0</code>,  <code>0.12.1-0</code>,  </span></summary>
      

      ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.6-0``,  ``0.13.5-0``,  ``0.13.4-0``,  ``0.13.3-0``,  ``0.13.2-0``,  ``0.12.2-0``,  ``0.12.1-0``,  ``0.12.0-0``,  ``0.11.0-0``,  ``0.10.1-0``,  ``0.9.3-1``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bedtools: ``>=2.30.0``
   :depends biopython: ``>=1.79``
   :depends h5py: ``2.10``
   :depends matplotlib-base: ``>=3.5.0``
   :depends numpy: ``>=1.19.5``
   :depends pandas: ``>=1.3.4``
   :depends psutil: ``>=5.8.0``
   :depends pybedtools: ``>=0.8.2``
   :depends python: ``>=3.7,<3.10``
   :depends python-wget: ``>=3.2``
   :depends requests: ``>=2.26.0``
   :depends scikit-learn: ``>=1.0.1``
   :depends scipy: ``>=1.7.3``
   :depends seaborn: ``>=0.11.2``
   :depends shap: ``>=0.40.0``
   :depends statsmodels: ``>=0.13.1``
   :depends tensorflow: ``>=2.4.1``
   :depends tqdm: ``>=4.62.3``
   :depends weblogo: ``>=3.7.8``
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

      mamba install deepac

   and update with::

      mamba update deepac

  To create a new environment, run::

      mamba create --name myenvname deepac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepac:<tag>

   (see `deepac/tags`_ for valid values for ``<tag>``)


.. |downloads_deepac| image:: https://img.shields.io/conda/dn/bioconda/deepac.svg?style=flat
   :target: https://anaconda.org/bioconda/deepac
   :alt:   (downloads)
.. |docker_deepac| image:: https://quay.io/repository/biocontainers/deepac/status
   :target: https://quay.io/repository/biocontainers/deepac
.. _`deepac/tags`: https://quay.io/repository/biocontainers/deepac?tab=tags


.. raw:: html

    <script>
        var package = "deepac";
        var versions = ["0.14.1","0.14.0","0.13.6","0.13.5","0.13.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepac/README.html