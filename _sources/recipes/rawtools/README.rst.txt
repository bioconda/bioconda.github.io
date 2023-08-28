:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rawtools'
.. highlight: bash

rawtools
========

.. conda:recipe:: rawtools
   :replaces_section_title:
   :noindex:

   RawTools is an open\-source and freely available package designed to perform scan data parsing and quantification\, and quality control analysis of Thermo Orbitrap raw mass spectrometer files.

   :homepage: https://github.com/kevinkovalchik/RawTools
   :license: Apache License, Version 2.0
   :recipe: /`rawtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rawtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rawtools/meta.yaml>`_

   


.. conda:package:: rawtools

   |downloads_rawtools| |docker_rawtools|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``1.4.2-0``,  ``1.4.1-0``

      

   
   :depends mono: ``>=5.0.0``
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

      mamba install rawtools

   and update with::

      mamba update rawtools

  To create a new environment, run::

      mamba create --name myenvname rawtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rawtools:<tag>

   (see `rawtools/tags`_ for valid values for ``<tag>``)


.. |downloads_rawtools| image:: https://img.shields.io/conda/dn/bioconda/rawtools.svg?style=flat
   :target: https://anaconda.org/bioconda/rawtools
   :alt:   (downloads)
.. |docker_rawtools| image:: https://quay.io/repository/biocontainers/rawtools/status
   :target: https://quay.io/repository/biocontainers/rawtools
.. _`rawtools/tags`: https://quay.io/repository/biocontainers/rawtools?tab=tags


.. raw:: html

    <script>
        var package = "rawtools";
        var versions = ["2.0.4","2.0.3","2.0.3","2.0.2","1.4.2"];
    </script>





Notes
-----
RawTools is an open\-source and freely available package designed to perform scan data parsing and quantification\, and quality control analysis of Thermo Orbitrap raw mass spectrometer files.
RawTools is written in C\# and uses the Thermo RawFileReader library.
RawTools is fully compatible with Windows\, Linux\, and MacOS operating systems.
RawTools is the replacement for the previously described RawQuant Python package.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rawtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rawtools/README.html