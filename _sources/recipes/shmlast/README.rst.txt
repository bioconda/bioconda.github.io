:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shmlast'
.. highlight: bash

shmlast
=======

.. conda:recipe:: shmlast
   :replaces_section_title:
   :noindex:

   conditional reciprocal best hits with LAST

   :homepage: https://github.com/camillescott/shmlast
   :license: BSD-3-Clause
   :recipe: /`shmlast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shmlast/meta.yaml>`_

   


.. conda:package:: shmlast

   |downloads_shmlast| |docker_shmlast|

   :versions:
      
      

      ``1.6-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends doit: ``>=0.29.0``
   :depends ficus: ``>=0.5``
   :depends filelock: ``>=2.0.6``
   :depends last: ``<=874``
   :depends matplotlib-base: ``>=3``
   :depends numexpr: ``>=2.3.1``
   :depends numpy: ``>=1.9.0``
   :depends ope: ``>=0.6``
   :depends pandas: ``>=0.17.0``
   :depends parallel: 
   :depends python: ``>=3``
   :depends scipy: ``>=0.16.0``
   :depends screed: ``>=0.9``
   :depends seaborn: ``>=0.6.0``
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

      mamba install shmlast

   and update with::

      mamba update shmlast

  To create a new environment, run::

      mamba create --name myenvname shmlast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/shmlast:<tag>

   (see `shmlast/tags`_ for valid values for ``<tag>``)


.. |downloads_shmlast| image:: https://img.shields.io/conda/dn/bioconda/shmlast.svg?style=flat
   :target: https://anaconda.org/bioconda/shmlast
   :alt:   (downloads)
.. |docker_shmlast| image:: https://quay.io/repository/biocontainers/shmlast/status
   :target: https://quay.io/repository/biocontainers/shmlast
.. _`shmlast/tags`: https://quay.io/repository/biocontainers/shmlast?tab=tags


.. raw:: html

    <script>
        var package = "shmlast";
        var versions = ["1.6","1.4","1.4","1.4","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shmlast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shmlast/README.html