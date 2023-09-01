:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'evidencemodeler'
.. highlight: bash

evidencemodeler
===============

.. conda:recipe:: evidencemodeler
   :replaces_section_title:
   :noindex:

   Evidence Modeler combines ab intio gene predictions\, protein alignments\, and transcript alignments into weighted consensus gene structures

   :homepage: https://github.com/EVidenceModeler/EVidenceModeler
   :license: BSD / BSD 3-Clause
   :recipe: /`evidencemodeler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evidencemodeler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/evidencemodeler/meta.yaml>`_

   


.. conda:package:: evidencemodeler

   |downloads_evidencemodeler| |docker_evidencemodeler|

   :versions:
      
      

      ``2.1.0-2``,  ``2.1.0-1``,  ``2.1.0-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``v1.1.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends perl: 
   :depends perl-carp: 
   :depends perl-dbi: 
   :depends perl-uri: 
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

      mamba install evidencemodeler

   and update with::

      mamba update evidencemodeler

  To create a new environment, run::

      mamba create --name myenvname evidencemodeler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/evidencemodeler:<tag>

   (see `evidencemodeler/tags`_ for valid values for ``<tag>``)


.. |downloads_evidencemodeler| image:: https://img.shields.io/conda/dn/bioconda/evidencemodeler.svg?style=flat
   :target: https://anaconda.org/bioconda/evidencemodeler
   :alt:   (downloads)
.. |docker_evidencemodeler| image:: https://quay.io/repository/biocontainers/evidencemodeler/status
   :target: https://quay.io/repository/biocontainers/evidencemodeler
.. _`evidencemodeler/tags`: https://quay.io/repository/biocontainers/evidencemodeler?tab=tags


.. raw:: html

    <script>
        var package = "evidencemodeler";
        var versions = ["2.1.0","2.1.0","2.1.0","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/evidencemodeler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/evidencemodeler/README.html