:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coconet-binning'
.. highlight: bash

coconet-binning
===============

.. conda:recipe:: coconet-binning
   :replaces_section_title:
   :noindex:

   A contig binning tool from viral metagenomes

   :homepage: https://github.com/Puumanamana/CoCoNet
   :documentation: https://coconet.readthedocs.io/en/latest/
   
   :license: APACHE / Apache 2.0
   :recipe: /`coconet-binning <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coconet-binning/meta.yaml>`_

   


.. conda:package:: coconet-binning

   |downloads_coconet-binning| |docker_coconet-binning|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.54-0``,  ``0.52-0``

      

   
   :depends biopython: 
   :depends h5py: 
   :depends hnswlib: 
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends psutil: 
   :depends pybind11: 
   :depends pysam: ``>=0.16``
   :depends python: ``3.7.*``
   :depends python-igraph: ``>=0.8``
   :depends pytorch: ``>=1.0``
   :depends pyyaml: 
   :depends scikit-bio: ``>=0.5.6``
   :depends scikit-learn: 
   :depends scipy: 
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

      mamba install coconet-binning

   and update with::

      mamba update coconet-binning

  To create a new environment, run::

      mamba create --name myenvname coconet-binning

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/coconet-binning:<tag>

   (see `coconet-binning/tags`_ for valid values for ``<tag>``)


.. |downloads_coconet-binning| image:: https://img.shields.io/conda/dn/bioconda/coconet-binning.svg?style=flat
   :target: https://anaconda.org/bioconda/coconet-binning
   :alt:   (downloads)
.. |docker_coconet-binning| image:: https://quay.io/repository/biocontainers/coconet-binning/status
   :target: https://quay.io/repository/biocontainers/coconet-binning
.. _`coconet-binning/tags`: https://quay.io/repository/biocontainers/coconet-binning?tab=tags


.. raw:: html

    <script>
        var package = "coconet-binning";
        var versions = ["1.1.0","1.0.0","0.54","0.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coconet-binning/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coconet-binning/README.html