:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'amplify'
.. highlight: bash

amplify
=======

.. conda:recipe:: amplify
   :replaces_section_title:
   :noindex:

   Attentive deep learning model for antimicrobial peptide prediction

   :homepage: https://github.com/bcgsc/AMPlify
   :license: GPL / GPL-3
   :recipe: /`amplify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/amplify/meta.yaml>`_

   


.. conda:package:: amplify

   |downloads_amplify| |docker_amplify|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.1-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.1.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends absl-py: ``<2``
   :depends biopython: 
   :depends h5py: ``<3``
   :depends keras: ``2.2.4.*``
   :depends numpy: ``<1.17``
   :depends pandas: 
   :depends python: ``3.6.*``
   :depends scikit-learn: 
   :depends tensorflow: ``>=1.10,<1.13``
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

      mamba install amplify

   and update with::

      mamba update amplify

  To create a new environment, run::

      mamba create --name myenvname amplify

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/amplify:<tag>

   (see `amplify/tags`_ for valid values for ``<tag>``)


.. |downloads_amplify| image:: https://img.shields.io/conda/dn/bioconda/amplify.svg?style=flat
   :target: https://anaconda.org/bioconda/amplify
   :alt:   (downloads)
.. |docker_amplify| image:: https://quay.io/repository/biocontainers/amplify/status
   :target: https://quay.io/repository/biocontainers/amplify
.. _`amplify/tags`: https://quay.io/repository/biocontainers/amplify?tab=tags


.. raw:: html

    <script>
        var package = "amplify";
        var versions = ["2.0.1","2.0.0","2.0.0","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/amplify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/amplify/README.html