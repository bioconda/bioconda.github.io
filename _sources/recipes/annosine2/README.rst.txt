:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'annosine2'
.. highlight: bash

annosine2
=========

.. conda:recipe:: annosine2
   :replaces_section_title:
   :noindex:

   AnnoSINE2 \- SINE Annotation Tool for Plant and Animal Genomes

   :homepage: https://github.com/liaoherui/AnnoSINE
   :license: MIT / MIT
   :recipe: /`annosine2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annosine2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/annosine2/meta.yaml>`_

   


.. conda:package:: annosine2

   |downloads_annosine2| |docker_annosine2|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends cd-hit: ``4.8.1``
   :depends cycler: ``0.10.0``
   :depends hmmer: ``3.3.1``
   :depends irf: ``3.08``
   :depends kiwisolver: 
   :depends matplotlib-base: 
   :depends minimap2: ``2.26``
   :depends nodejs: ``18.12.1``
   :depends numpy: 
   :depends pillow: 
   :depends pyparsing: 
   :depends python: 
   :depends python-dateutil: 
   :depends repeatmasker: ``4.1.2.p1``
   :depends seqtk: ``1.4``
   :depends six: 
   :depends trf: ``4.09``
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

      mamba install annosine2

   and update with::

      mamba update annosine2

  To create a new environment, run::

      mamba create --name myenvname annosine2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/annosine2:<tag>

   (see `annosine2/tags`_ for valid values for ``<tag>``)


.. |downloads_annosine2| image:: https://img.shields.io/conda/dn/bioconda/annosine2.svg?style=flat
   :target: https://anaconda.org/bioconda/annosine2
   :alt:   (downloads)
.. |docker_annosine2| image:: https://quay.io/repository/biocontainers/annosine2/status
   :target: https://quay.io/repository/biocontainers/annosine2
.. _`annosine2/tags`: https://quay.io/repository/biocontainers/annosine2?tab=tags


.. raw:: html

    <script>
        var package = "annosine2";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/annosine2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/annosine2/README.html