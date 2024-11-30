:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biosniff'
.. highlight: bash

biosniff
========

.. conda:recipe:: biosniff
   :replaces_section_title:
   :noindex:

   A Sniffer for Biological formats

   :homepage: http://github.com/cokelaer/biosniff/
   :documentation: https://github.com/cokelaer/biosniff
   
   :license: BSD / BSD 3-clause
   :recipe: /`biosniff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biosniff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biosniff/meta.yaml>`_

   


.. conda:package:: biosniff

   |downloads_biosniff| |docker_biosniff|

   :versions:
      
      

      ``1.0.0-0``,  ``0.4.0-0``

      

   
   :depends click: 
   :depends colorlog: 
   :depends pandas: 
   :depends pysam: 
   :depends python: 
   :depends pyyaml: 
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

      mamba install biosniff

   and update with::

      mamba update biosniff

  To create a new environment, run::

      mamba create --name myenvname biosniff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/biosniff:<tag>

   (see `biosniff/tags`_ for valid values for ``<tag>``)


.. |downloads_biosniff| image:: https://img.shields.io/conda/dn/bioconda/biosniff.svg?style=flat
   :target: https://anaconda.org/bioconda/biosniff
   :alt:   (downloads)
.. |docker_biosniff| image:: https://quay.io/repository/biocontainers/biosniff/status
   :target: https://quay.io/repository/biocontainers/biosniff
.. _`biosniff/tags`: https://quay.io/repository/biocontainers/biosniff?tab=tags


.. raw:: html

    <script>
        var package = "biosniff";
        var versions = ["1.0.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biosniff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biosniff/README.html