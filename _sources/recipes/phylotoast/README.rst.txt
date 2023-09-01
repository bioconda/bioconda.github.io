:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylotoast'
.. highlight: bash

phylotoast
==========

.. conda:recipe:: phylotoast
   :replaces_section_title:
   :noindex:

   Tools for phylogenetic data analysis including visualization and cluster\-computing support. 

   :homepage: https://github.com/smdabdoub/phylotoast
   :license: MIT
   :recipe: /`phylotoast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast/meta.yaml>`_

   


.. conda:package:: phylotoast

   |downloads_phylotoast| |docker_phylotoast|

   :versions:
      
      

      ``1.4.0rc2-0``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends biom-format: ``>=2.1.5``
   :depends biopython: ``>=1.60``
   :depends h5py: 
   :depends matplotlib: ``<=1.5.3``
   :depends numpy: 
   :depends palettable: 
   :depends pandas: 
   :depends python: ``2.7*``
   :depends scikit-bio: ``<=0.4.2``
   :depends scikit-learn: 
   :depends scipy: 
   :depends statsmodels: 
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

      mamba install phylotoast

   and update with::

      mamba update phylotoast

  To create a new environment, run::

      mamba create --name myenvname phylotoast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phylotoast:<tag>

   (see `phylotoast/tags`_ for valid values for ``<tag>``)


.. |downloads_phylotoast| image:: https://img.shields.io/conda/dn/bioconda/phylotoast.svg?style=flat
   :target: https://anaconda.org/bioconda/phylotoast
   :alt:   (downloads)
.. |docker_phylotoast| image:: https://quay.io/repository/biocontainers/phylotoast/status
   :target: https://quay.io/repository/biocontainers/phylotoast
.. _`phylotoast/tags`: https://quay.io/repository/biocontainers/phylotoast?tab=tags


.. raw:: html

    <script>
        var package = "phylotoast";
        var versions = ["1.4.0rc2","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylotoast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylotoast/README.html