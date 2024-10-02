:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mhcflurry'
.. highlight: bash

mhcflurry
=========

.. conda:recipe:: mhcflurry
   :replaces_section_title:
   :noindex:

   MHC Binding Predictor

   :homepage: https://github.com/openvax/mhcflurry
   :license: APACHE / Apache-2.0
   :recipe: /`mhcflurry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mhcflurry/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2018.05.014`

   


.. conda:package:: mhcflurry

   |downloads_mhcflurry| |docker_mhcflurry|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.1.4-0</code>,  <code>2.1.2-0</code>,  <code>2.1.1-0</code>,  <code>2.1.0-0</code>,  <code>2.0.6-0</code>,  <code>2.0.1-0</code>,  <code>2.0.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``2.1.4-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.6-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.4.3-0``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.4-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: 
   :depends mhcgnomes: ``>=0.8.4``
   :depends np_utils: 
   :depends pandas: ``>=0.20.3``
   :depends python: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends six: 
   :depends tensorflow: ``>=2.12.0``
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

      mamba install mhcflurry

   and update with::

      mamba update mhcflurry

  To create a new environment, run::

      mamba create --name myenvname mhcflurry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mhcflurry:<tag>

   (see `mhcflurry/tags`_ for valid values for ``<tag>``)


.. |downloads_mhcflurry| image:: https://img.shields.io/conda/dn/bioconda/mhcflurry.svg?style=flat
   :target: https://anaconda.org/bioconda/mhcflurry
   :alt:   (downloads)
.. |docker_mhcflurry| image:: https://quay.io/repository/biocontainers/mhcflurry/status
   :target: https://quay.io/repository/biocontainers/mhcflurry
.. _`mhcflurry/tags`: https://quay.io/repository/biocontainers/mhcflurry?tab=tags


.. raw:: html

    <script>
        var package = "mhcflurry";
        var versions = ["2.1.4","2.1.2","2.1.1","2.1.0","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mhcflurry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mhcflurry/README.html