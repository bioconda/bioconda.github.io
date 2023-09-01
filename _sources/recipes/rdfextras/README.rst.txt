:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdfextras'
.. highlight: bash

rdfextras
=========

.. conda:recipe:: rdfextras
   :replaces_section_title:
   :noindex:

   RDFExtras provide tools\, extra stores and such for RDFLib.

   :homepage: http://github.com/RDFLib/rdfextras
   :license: BSD / BSD License
   :recipe: /`rdfextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras/meta.yaml>`_

   


.. conda:package:: rdfextras

   |downloads_rdfextras| |docker_rdfextras|

   :versions:
      
      

      ``0.4-3``,  ``0.4-2``,  ``0.4-0``

      

   
   :depends isodate: 
   :depends pyparsing: ``<=1.5.7``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends rdflib: ``>=3.2.1``
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

      mamba install rdfextras

   and update with::

      mamba update rdfextras

  To create a new environment, run::

      mamba create --name myenvname rdfextras

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rdfextras:<tag>

   (see `rdfextras/tags`_ for valid values for ``<tag>``)


.. |downloads_rdfextras| image:: https://img.shields.io/conda/dn/bioconda/rdfextras.svg?style=flat
   :target: https://anaconda.org/bioconda/rdfextras
   :alt:   (downloads)
.. |docker_rdfextras| image:: https://quay.io/repository/biocontainers/rdfextras/status
   :target: https://quay.io/repository/biocontainers/rdfextras
.. _`rdfextras/tags`: https://quay.io/repository/biocontainers/rdfextras?tab=tags


.. raw:: html

    <script>
        var package = "rdfextras";
        var versions = ["0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdfextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdfextras/README.html