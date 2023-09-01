:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'picrust'
.. highlight: bash

picrust
=======

.. conda:recipe:: picrust
   :replaces_section_title:
   :noindex:

   PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

   :homepage: http://picrust.github.com
   :license: GPL-3.0
   :recipe: /`picrust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust/meta.yaml>`_

   


.. conda:package:: picrust

   |downloads_picrust| |docker_picrust|

   :versions:
      
      

      ``1.1.4-1``,  ``1.1.4-0``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-0``

      

   
   :depends biom-format: ``>=2.1.4,<2.2.0``
   :depends cogent: ``>=1.5.3``
   :depends future: ``>=0.16``
   :depends h5py: ``>=2.7.1``
   :depends numpy: 
   :depends python: ``2.7.*``
   :depends r-ape: ``>=5.0``
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

      mamba install picrust

   and update with::

      mamba update picrust

  To create a new environment, run::

      mamba create --name myenvname picrust

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/picrust:<tag>

   (see `picrust/tags`_ for valid values for ``<tag>``)


.. |downloads_picrust| image:: https://img.shields.io/conda/dn/bioconda/picrust.svg?style=flat
   :target: https://anaconda.org/bioconda/picrust
   :alt:   (downloads)
.. |docker_picrust| image:: https://quay.io/repository/biocontainers/picrust/status
   :target: https://quay.io/repository/biocontainers/picrust
.. _`picrust/tags`: https://quay.io/repository/biocontainers/picrust?tab=tags


.. raw:: html

    <script>
        var package = "picrust";
        var versions = ["1.1.4","1.1.4","1.1.3","1.1.3","1.1.3"];
    </script>





Notes
-----
PICRUSt requires a set of large pre\-calculated data files. PICRUSt contains a script\, \"download\_picrust\_files.py\"\, which downloads the data in the proper location\, and which can be run after PICRUSt has been installed.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picrust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picrust/README.html