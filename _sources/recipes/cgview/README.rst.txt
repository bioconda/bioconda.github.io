:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgview'
.. highlight: bash

cgview
======

.. conda:recipe:: cgview
   :replaces_section_title:
   :noindex:

   CGView is a Java package for generating high quality\, zoomable maps of circular genomes.
   Its primary purpose is to serve as a component of sequence annotation pipelines\, as a
   means of generating visual output suitable for the web.

   :homepage: http://wishart.biology.ualberta.ca/cgview/
   :license: GNU General Public License, Version 2.0
   :recipe: /`cgview <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgview/meta.yaml>`_

   


.. conda:package:: cgview

   |downloads_cgview| |docker_cgview|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends openjdk: ``>=6``
   :depends perl: 
   :depends perl-bioperl: ``>=1.7.2``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cgview

   and update with::

      mamba update cgview

  To create a new environment, run::

      mamba create --name myenvname cgview

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cgview:<tag>

   (see `cgview/tags`_ for valid values for ``<tag>``)


.. |downloads_cgview| image:: https://img.shields.io/conda/dn/bioconda/cgview.svg?style=flat
   :target: https://anaconda.org/bioconda/cgview
   :alt:   (downloads)
.. |docker_cgview| image:: https://quay.io/repository/biocontainers/cgview/status
   :target: https://quay.io/repository/biocontainers/cgview
.. _`cgview/tags`: https://quay.io/repository/biocontainers/cgview?tab=tags


.. raw:: html

    <script>
        var package = "cgview";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgview/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgview/README.html