:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nordic'
.. highlight: bash

nordic
======

.. conda:recipe:: nordic
   :replaces_section_title:
   :noindex:

   NORDic\: a Network\-Oriented package for the Repurposing of Drugs

   :homepage: https://github.com/clreda/NORDic
   :documentation: https://github.com/clreda/NORDic/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`nordic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nordic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nordic/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7239047`

   


.. conda:package:: nordic

   |downloads_nordic| |docker_nordic|

   :versions:
      
      

      ``2.6.0-0``,  ``2.5.0-1``,  ``2.5.0-0``,  ``2.4.4-0``

      

   
   :depends clingo: ``>=5.6.1``
   :depends cmappy: ``>=4.0.1``
   :depends cmappy: ``>=4.0.1,<5.0a0``
   :depends graphviz: ``>=0.20.1``
   :depends graphviz: ``>=12.2.1,<13.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: 
   :depends numpy: ``<2.0.0,>=1.22.4``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends omnipath: 
   :depends openpyxl: ``>=3.0.10``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends qnorm: ``>=0.5.1``
   :depends quadprog: ``>=0.1.11``
   :depends scikit-learn: ``>=1.1.2``
   :depends scipy: ``>=1.6.2``
   :depends seaborn: ``>=0.12.1``
   :depends tqdm: ``>=4.62.3``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install nordic

   and update with::

      mamba update nordic

  To create a new environment, run::

      mamba create --name myenvname nordic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nordic:<tag>

   (see `nordic/tags`_ for valid values for ``<tag>``)


.. |downloads_nordic| image:: https://img.shields.io/conda/dn/bioconda/nordic.svg?style=flat
   :target: https://anaconda.org/bioconda/nordic
   :alt:   (downloads)
.. |docker_nordic| image:: https://quay.io/repository/biocontainers/nordic/status
   :target: https://quay.io/repository/biocontainers/nordic
.. _`nordic/tags`: https://quay.io/repository/biocontainers/nordic?tab=tags


.. raw:: html

    <script>
        var package = "nordic";
        var versions = ["2.6.0","2.5.0","2.5.0","2.4.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nordic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nordic/README.html