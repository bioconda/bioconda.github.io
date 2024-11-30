:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'remurna'
.. highlight: bash

remurna
=======

.. conda:recipe:: remurna
   :replaces_section_title:
   :noindex:

   Measurement of Single\-Nucleotide Polymorphism\-induced Changes of RNA Conformation

   :homepage: https://www.ncbi.nlm.nih.gov/CBBresearch/Przytycka/index.cgi#remurna
   :license: 
   :recipe: /`remurna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remurna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/remurna/meta.yaml>`_

   


.. conda:package:: remurna

   |downloads_remurna| |docker_remurna|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc: 
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

      mamba install remurna

   and update with::

      mamba update remurna

  To create a new environment, run::

      mamba create --name myenvname remurna

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/remurna:<tag>

   (see `remurna/tags`_ for valid values for ``<tag>``)


.. |downloads_remurna| image:: https://img.shields.io/conda/dn/bioconda/remurna.svg?style=flat
   :target: https://anaconda.org/bioconda/remurna
   :alt:   (downloads)
.. |docker_remurna| image:: https://quay.io/repository/biocontainers/remurna/status
   :target: https://quay.io/repository/biocontainers/remurna
.. _`remurna/tags`: https://quay.io/repository/biocontainers/remurna?tab=tags


.. raw:: html

    <script>
        var package = "remurna";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/remurna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/remurna/README.html