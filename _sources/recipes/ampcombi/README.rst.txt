:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampcombi'
.. highlight: bash

ampcombi
========

.. conda:recipe:: ampcombi
   :replaces_section_title:
   :noindex:

   A parsing tool to convert and summarise the outputs from multiple AMP detection tools.

   :homepage: https://github.com/Darcy220606/AMPcombi
   :developer docs: https://github.com/Darcy220606/AMPcombi/tree/dev
   :license: MIT / MIT
   :recipe: /`ampcombi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampcombi/meta.yaml>`_

   


.. conda:package:: ampcombi

   |downloads_ampcombi| |docker_ampcombi|

   :versions:
      
      

      ``2.0.1-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends backports.tempfile: 
   :depends biopython: ``1.80``
   :depends colorama: ``0.4.6``
   :depends contextlib2: 
   :depends jsonschema: 
   :depends mmseqs2: ``15.6f452``
   :depends numpy: ``1.26.4``
   :depends openpyxl: 
   :depends pandas: ``1.5.2``
   :depends parsedatetime: 
   :depends python: ``3.11``
   :depends requests: 
   :depends subprocess32: 
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

      mamba install ampcombi

   and update with::

      mamba update ampcombi

  To create a new environment, run::

      mamba create --name myenvname ampcombi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ampcombi:<tag>

   (see `ampcombi/tags`_ for valid values for ``<tag>``)


.. |downloads_ampcombi| image:: https://img.shields.io/conda/dn/bioconda/ampcombi.svg?style=flat
   :target: https://anaconda.org/bioconda/ampcombi
   :alt:   (downloads)
.. |docker_ampcombi| image:: https://quay.io/repository/biocontainers/ampcombi/status
   :target: https://quay.io/repository/biocontainers/ampcombi
.. _`ampcombi/tags`: https://quay.io/repository/biocontainers/ampcombi?tab=tags


.. raw:: html

    <script>
        var package = "ampcombi";
        var versions = ["2.0.1","0.2.2","0.2.1","0.2.0","0.1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampcombi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampcombi/README.html