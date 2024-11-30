:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hclust2'
.. highlight: bash

hclust2
=======

.. conda:recipe:: hclust2
   :replaces_section_title:
   :noindex:

   hclust2 is a handy tool for plotting heat\-maps

   :homepage: https://github.com/SegataLab/hclust2
   :license: License
   :recipe: /`hclust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hclust2/meta.yaml>`_

   


.. conda:package:: hclust2

   |downloads_hclust2| |docker_hclust2|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.99-3``,  ``0.99-2``,  ``0.99-1``,  ``0.99-0``,  ``0.98.3d589ab-1``,  ``0.98.3d589ab-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends scipy: 
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

      mamba install hclust2

   and update with::

      mamba update hclust2

  To create a new environment, run::

      mamba create --name myenvname hclust2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hclust2:<tag>

   (see `hclust2/tags`_ for valid values for ``<tag>``)


.. |downloads_hclust2| image:: https://img.shields.io/conda/dn/bioconda/hclust2.svg?style=flat
   :target: https://anaconda.org/bioconda/hclust2
   :alt:   (downloads)
.. |docker_hclust2| image:: https://quay.io/repository/biocontainers/hclust2/status
   :target: https://quay.io/repository/biocontainers/hclust2
.. _`hclust2/tags`: https://quay.io/repository/biocontainers/hclust2?tab=tags


.. raw:: html

    <script>
        var package = "hclust2";
        var versions = ["1.0.0","1.0.0","0.99","0.99","0.99"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hclust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hclust2/README.html