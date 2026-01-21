:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strmie-hd'
.. highlight: bash

strmie-hd
=========

.. conda:recipe:: strmie-hd
   :replaces_section_title:
   :noindex:

   Automated Huntington Disease polyQ pattern scanner.

   :homepage: https://github.com/mazzalab/STRmie-HD
   :documentation: https://mazzalab.github.io/STRmie-HD/
   
   :license: MIT / MIT
   :recipe: /`strmie-hd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strmie-hd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strmie-hd/meta.yaml>`_

   STRmie\-HD \(Short Tandem Repeat Mapping and Identification Engine \- Huntington\'s Disease\) is an interactive\, 
   Python\-based tool designed to support the curation\, visualization\, and interpretation of short tandem repeat \(STR\) 
   genotyping data obtained from Huntington\'s Disease \(HD\) patients. It enables the prediction\, refinement and validation 
   of CAG\/CCG repeat expansion results in the context of HD\, by highlighting cases of allelic instability or potential misclassification.



.. conda:package:: strmie-hd

   |downloads_strmie-hd| |docker_strmie-hd|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends colorama: 
   :depends h5py: 
   :depends jinja2: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends openpyxl: 
   :depends pandas: 
   :depends pytest: 
   :depends python: ``>=3.8``
   :depends regex: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends seaborn: 
   :depends xlrd: 
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

      mamba install strmie-hd

   and update with::

      mamba update strmie-hd

  To create a new environment, run::

      mamba create --name myenvname strmie-hd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strmie-hd:<tag>

   (see `strmie-hd/tags`_ for valid values for ``<tag>``)


.. |downloads_strmie-hd| image:: https://img.shields.io/conda/dn/bioconda/strmie-hd.svg?style=flat
   :target: https://anaconda.org/bioconda/strmie-hd
   :alt:   (downloads)
.. |docker_strmie-hd| image:: https://quay.io/repository/biocontainers/strmie-hd/status
   :target: https://quay.io/repository/biocontainers/strmie-hd
.. _`strmie-hd/tags`: https://quay.io/repository/biocontainers/strmie-hd?tab=tags


.. raw:: html

    <script>
        var package = "strmie-hd";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strmie-hd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strmie-hd/README.html