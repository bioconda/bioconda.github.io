:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribolands'
.. highlight: bash

ribolands
=========

.. conda:recipe:: ribolands
   :replaces_section_title:
   :noindex:

   Energy landscapes and folding kinetics of nucleic acids

   :homepage: https://github.com/bad-ants-fleet/ribolands
   :license: MIT
   :recipe: /`ribolands <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribolands/meta.yaml>`_

   


.. conda:package:: ribolands

   |downloads_ribolands| |docker_ribolands|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends barriers: 
   :depends crnsimulator: 
   :depends future: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends pandas: 
   :depends python: ``<3.9``
   :depends treekin: 
   :depends viennarna: 
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

      mamba install ribolands

   and update with::

      mamba update ribolands

  To create a new environment, run::

      mamba create --name myenvname ribolands

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ribolands:<tag>

   (see `ribolands/tags`_ for valid values for ``<tag>``)


.. |downloads_ribolands| image:: https://img.shields.io/conda/dn/bioconda/ribolands.svg?style=flat
   :target: https://anaconda.org/bioconda/ribolands
   :alt:   (downloads)
.. |docker_ribolands| image:: https://quay.io/repository/biocontainers/ribolands/status
   :target: https://quay.io/repository/biocontainers/ribolands
.. _`ribolands/tags`: https://quay.io/repository/biocontainers/ribolands?tab=tags


.. raw:: html

    <script>
        var package = "ribolands";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribolands/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribolands/README.html