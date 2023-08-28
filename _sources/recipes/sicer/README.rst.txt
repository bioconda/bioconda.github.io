:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sicer'
.. highlight: bash

sicer
=====

.. conda:recipe:: sicer
   :replaces_section_title:
   :noindex:

   A clustering approach for identification of enriched domains from histone modification ChIP\-Seq data

   :homepage: http://home.gwu.edu/~wpeng/Software.htm
   :license: MIT / MIT
   :recipe: /`sicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`peakcalling_sicer`

   


.. conda:package:: sicer

   |downloads_sicer| |docker_sicer|

   :versions:
      
      

      ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends numpy: 
   :depends python: ``<3``
   :depends scipy: 
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

      mamba install sicer

   and update with::

      mamba update sicer

  To create a new environment, run::

      mamba create --name myenvname sicer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sicer:<tag>

   (see `sicer/tags`_ for valid values for ``<tag>``)


.. |downloads_sicer| image:: https://img.shields.io/conda/dn/bioconda/sicer.svg?style=flat
   :target: https://anaconda.org/bioconda/sicer
   :alt:   (downloads)
.. |docker_sicer| image:: https://quay.io/repository/biocontainers/sicer/status
   :target: https://quay.io/repository/biocontainers/sicer
.. _`sicer/tags`: https://quay.io/repository/biocontainers/sicer?tab=tags


.. raw:: html

    <script>
        var package = "sicer";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sicer/README.html