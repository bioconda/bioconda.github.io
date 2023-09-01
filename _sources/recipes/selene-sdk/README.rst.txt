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

         <details><summary><span class="truncated-version-list"><code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.8-3</code>,  <code>0.4.8-2</code>,  <code>0.4.8-1</code>,  <code>0.4.8-0</code>,  <code>0.4.7-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  </span></summary>
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.8-3``,  ``0.4.8-2``,  ``0.4.8-1``,  ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends click: 
   :depends h5py: 
   :depends libgcc-ng: ``>=9.3.0``
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

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install selene-sdk

   and update with::

      mamba update selene-sdk

  To create a new environment, run::

      mamba create --name myenvname selene-sdk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/selene-sdk:<tag>

   (see `selene-sdk/tags`_ for valid values for ``<tag>``)


.. |downloads_selene-sdk| image:: https://img.shields.io/conda/dn/bioconda/selene-sdk.svg?style=flat
   :target: https://anaconda.org/bioconda/selene-sdk
   :alt:   (downloads)
.. |docker_selene-sdk| image:: https://quay.io/repository/biocontainers/selene-sdk/status
   :target: https://quay.io/repository/biocontainers/selene-sdk
.. _`selene-sdk/tags`: https://quay.io/repository/biocontainers/selene-sdk?tab=tags


.. raw:: html

    <script>
        var package = "selene-sdk";
        var versions = ["0.5.0","0.5.0","0.4.8","0.4.8","0.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selene-sdk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selene-sdk/README.html