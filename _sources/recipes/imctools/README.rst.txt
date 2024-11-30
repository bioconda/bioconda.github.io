:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'imctools'
.. highlight: bash

imctools
========

.. conda:recipe:: imctools
   :replaces_section_title:
   :noindex:

   An Image Mass Cytometry \(IMC\) file conversion tool that aims to convert IMC rawfiles \(.mcd\, .txt\) into an intermediary ome.tiff\, containing all the relevant metadata. Further it contains tools to generate simpler tiff files that can be directly be used as input files for e.g. CellProfiller\, Ilastik\, Fiji etc

   :homepage: https://github.com/BodenmillerGroup/imctools
   :documentation: https://github.com/BodenmillerGroup/imctools/blob/master/README.md
   
   :license: MIT
   :recipe: /`imctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/imctools/meta.yaml>`_

   


.. conda:package:: imctools

   |downloads_imctools| |docker_imctools|

   :versions:
      
      

      ``2.1.8-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-0``,  ``0.2-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends scikit-image: 
   :depends scipy: 
   :depends tifffile: ``>=0.13.5``
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

      mamba install imctools

   and update with::

      mamba update imctools

  To create a new environment, run::

      mamba create --name myenvname imctools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/imctools:<tag>

   (see `imctools/tags`_ for valid values for ``<tag>``)


.. |downloads_imctools| image:: https://img.shields.io/conda/dn/bioconda/imctools.svg?style=flat
   :target: https://anaconda.org/bioconda/imctools
   :alt:   (downloads)
.. |docker_imctools| image:: https://quay.io/repository/biocontainers/imctools/status
   :target: https://quay.io/repository/biocontainers/imctools
.. _`imctools/tags`: https://quay.io/repository/biocontainers/imctools?tab=tags


.. raw:: html

    <script>
        var package = "imctools";
        var versions = ["2.1.8","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/imctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/imctools/README.html