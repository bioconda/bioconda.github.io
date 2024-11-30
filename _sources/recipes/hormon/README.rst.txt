:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hormon'
.. highlight: bash

hormon
======

.. conda:recipe:: hormon
   :replaces_section_title:
   :noindex:

   A tool for annotation of alpha satellite arrays in centromeres of a newly assembled human genome.

   :homepage: https://github.com/ablab/HORmon
   :license: GPL / GPLv2
   :recipe: /`hormon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hormon/meta.yaml>`_

   HORmon infer human monomers based on the given alpha\-satellite consensus template and centromeric sequence\, extract HORs and decompose centromeric sequence into HORs.


.. conda:package:: hormon

   |downloads_hormon| |docker_hormon|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends clustalo: 
   :depends joblib: 
   :depends networkx: 
   :depends pygraphviz: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends setuptools: 
   :depends stringdecomposer: 
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

      mamba install hormon

   and update with::

      mamba update hormon

  To create a new environment, run::

      mamba create --name myenvname hormon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hormon:<tag>

   (see `hormon/tags`_ for valid values for ``<tag>``)


.. |downloads_hormon| image:: https://img.shields.io/conda/dn/bioconda/hormon.svg?style=flat
   :target: https://anaconda.org/bioconda/hormon
   :alt:   (downloads)
.. |docker_hormon| image:: https://quay.io/repository/biocontainers/hormon/status
   :target: https://quay.io/repository/biocontainers/hormon
.. _`hormon/tags`: https://quay.io/repository/biocontainers/hormon?tab=tags


.. raw:: html

    <script>
        var package = "hormon";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hormon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hormon/README.html