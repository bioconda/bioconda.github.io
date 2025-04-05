:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'changeo'
.. highlight: bash

changeo
=======

.. conda:recipe:: changeo
   :replaces_section_title:
   :noindex:

   A bioinformatics toolkit for processing high\-throughput lymphocyte receptor sequencing data.

   :homepage: https://github.com/immcantation/changeo
   :documentation: https://changeo.readthedocs.io
   
   :license: CC / Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
   :recipe: /`changeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/changeo/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btv359`

   


.. conda:package:: changeo

   |downloads_changeo| |docker_changeo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.0-0</code>,  <code>1.2.0-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0.0-0</code>,  <code>0.4.6-0</code>,  <code>0.4.5-0</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends airr: ``>=1.3.1``
   :depends biopython: ``>=1.81``
   :depends numpy: ``>=1.8``
   :depends packaging: ``>=23.2``
   :depends pandas: ``>=0.24``
   :depends presto: ``>=0.7.0``
   :depends python: ``>=3.4``
   :depends pyyaml: ``>=5.1``
   :depends scipy: ``>=0.14``
   :depends setuptools: 
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

      mamba install changeo

   and update with::

      mamba update changeo

  To create a new environment, run::

      mamba create --name myenvname changeo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/changeo:<tag>

   (see `changeo/tags`_ for valid values for ``<tag>``)


.. |downloads_changeo| image:: https://img.shields.io/conda/dn/bioconda/changeo.svg?style=flat
   :target: https://anaconda.org/bioconda/changeo
   :alt:   (downloads)
.. |docker_changeo| image:: https://quay.io/repository/biocontainers/changeo/status
   :target: https://quay.io/repository/biocontainers/changeo
.. _`changeo/tags`: https://quay.io/repository/biocontainers/changeo?tab=tags


.. raw:: html

    <script>
        var package = "changeo";
        var versions = ["1.3.1","1.3.0","1.2.0","1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/changeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/changeo/README.html