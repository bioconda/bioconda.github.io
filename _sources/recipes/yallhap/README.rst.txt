:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'yallhap'
.. highlight: bash

yallhap
=======

.. conda:recipe:: yallhap
   :replaces_section_title:
   :noindex:

   Modern Y\-chromosome haplogroup inference

   :homepage: https://github.com/trianglegrrl/yallHap
   :documentation: https://github.com/trianglegrrl/yallHap#readme
   
   :license: PolyForm-Noncommercial-1.0.0
   :recipe: /`yallhap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yallhap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/yallhap/meta.yaml>`_

   yallHap is a pipeline\-friendly tool for Y\-chromosome haplogroup
   classification supporting modern and ancient DNA with probabilistic
   confidence scoring. It uses the YFull phylogenetic tree and supports
   multiple reference genomes including T2T\-CHM13v2.0.



.. conda:package:: yallhap

   |downloads_yallhap| |docker_yallhap|

   :versions:
      
      

      ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends click: ``>=8.0.0``
   :depends numpy: ``>=1.24.0``
   :depends pandas: ``>=2.0.0``
   :depends pyliftover: ``>=0.4``
   :depends pysam: ``>=0.22.0``
   :depends python: ``>=3.10``
   :depends requests: ``>=2.28.0``
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

      mamba install yallhap

   and update with::

      mamba update yallhap

  To create a new environment, run::

      mamba create --name myenvname yallhap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/yallhap:<tag>

   (see `yallhap/tags`_ for valid values for ``<tag>``)


.. |downloads_yallhap| image:: https://img.shields.io/conda/dn/bioconda/yallhap.svg?style=flat
   :target: https://anaconda.org/bioconda/yallhap
   :alt:   (downloads)
.. |docker_yallhap| image:: https://quay.io/repository/biocontainers/yallhap/status
   :target: https://quay.io/repository/biocontainers/yallhap
.. _`yallhap/tags`: https://quay.io/repository/biocontainers/yallhap?tab=tags


.. raw:: html

    <script>
        var package = "yallhap";
        var versions = ["0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/yallhap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/yallhap/README.html