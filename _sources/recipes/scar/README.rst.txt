:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scar'
.. highlight: bash

scar
====

.. conda:recipe:: scar
   :replaces_section_title:
   :noindex:

   scAR \(single\-cell Ambient Remover\) is a deep learning model for ambient signal removal in droplet\-based single cell omicsis.

   :homepage: https://github.com/Novartis/scar
   :license: MIT
   :recipe: /`scar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scar/meta.yaml>`_

   


.. conda:package:: scar

   |downloads_scar| |docker_scar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.0-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  <code>0.5.5-0</code>,  <code>0.5.4-0</code>,  <code>0.5.2-0</code>,  <code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.4-0</code>,  </span></summary>
      

      ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.5-0``,  ``0.5.4-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.4-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.0-0``,  ``0.2.3-0``,  ``0.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends pyro-ppl: ``>=1.8.0``
   :depends python: ``>=3.10``
   :depends pytorch: ``>=1.10.0``
   :depends scanpy: 
   :depends scikit-learn: ``>=1.0.1``
   :depends seaborn: ``>=0.11.2``
   :depends setuptools: ``>=68.1.2``
   :depends tensorboard: ``>=2.2.1``
   :depends torchvision: ``>=0.9.0``
   :depends tqdm: ``>=4.62.3``
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

      mamba install scar

   and update with::

      mamba update scar

  To create a new environment, run::

      mamba create --name myenvname scar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scar:<tag>

   (see `scar/tags`_ for valid values for ``<tag>``)


.. |downloads_scar| image:: https://img.shields.io/conda/dn/bioconda/scar.svg?style=flat
   :target: https://anaconda.org/bioconda/scar
   :alt:   (downloads)
.. |docker_scar| image:: https://quay.io/repository/biocontainers/scar/status
   :target: https://quay.io/repository/biocontainers/scar
.. _`scar/tags`: https://quay.io/repository/biocontainers/scar?tab=tags


.. raw:: html

    <script>
        var package = "scar";
        var versions = ["0.7.0","0.6.1","0.6.0","0.5.5","0.5.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scar/README.html