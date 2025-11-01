:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'votuderep'
.. highlight: bash

votuderep
=========

.. conda:recipe:: votuderep
   :replaces_section_title:
   :noindex:

   A tool to dereplicate and filter vOTUs

   :homepage: https://github.com/quadram-institute-bioscience/votuderep
   :license: MIT
   :recipe: /`votuderep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/votuderep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/votuderep/meta.yaml>`_

   votuderep is a tool designed to dereplicate and filter viral 
   Operational Taxonomic Units \(vOTUs\).



.. conda:package:: votuderep

   |downloads_votuderep| |docker_votuderep|

   :versions:
      
      

      ``0.6.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.0-0``,  ``0.1.1-0``

      

   
   :depends blast: 
   :depends numpy: 
   :depends pandas: ``>=1.0``
   :depends pyfastx: 
   :depends python: ``>=3.8``
   :depends rich: 
   :depends rich-click: 
   :depends seqfu: ``>=1.20``
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

      mamba install votuderep

   and update with::

      mamba update votuderep

  To create a new environment, run::

      mamba create --name myenvname votuderep

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/votuderep:<tag>

   (see `votuderep/tags`_ for valid values for ``<tag>``)


.. |downloads_votuderep| image:: https://img.shields.io/conda/dn/bioconda/votuderep.svg?style=flat
   :target: https://anaconda.org/bioconda/votuderep
   :alt:   (downloads)
.. |docker_votuderep| image:: https://quay.io/repository/biocontainers/votuderep/status
   :target: https://quay.io/repository/biocontainers/votuderep
.. _`votuderep/tags`: https://quay.io/repository/biocontainers/votuderep?tab=tags


.. raw:: html

    <script>
        var package = "votuderep";
        var versions = ["0.6.0","0.4.1","0.4.0","0.2.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/votuderep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/votuderep/README.html