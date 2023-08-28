:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ratt'
.. highlight: bash

ratt
====

.. conda:recipe:: ratt
   :replaces_section_title:
   :noindex:

   Rapid Annotation Transfer Tool

   :homepage: http://ratt.sourceforge.net
   :license: GPL3
   :recipe: /`ratt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ratt/meta.yaml>`_

   RATT is software to transfer annotation from a reference \(annotated\) genome to an unannotated query genome. It was first developed to transfer annotations between different genome assembly versions. However\, it can also transfer annotations between strains and even different species\, like Plasmodium chabaudi onto P. berghei\, between different Leishmania species or Salmonella enterica onto other Salmonella serotypes. RATT is able to transfer any entries present on a reference sequence\, such as the systematic id or an annotator\'s notes\; such information would be lost in a de novo annotation. 


.. conda:package:: ratt

   |downloads_ratt| |docker_ratt|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends mummer: 
   :depends perl: 
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

      mamba install ratt

   and update with::

      mamba update ratt

  To create a new environment, run::

      mamba create --name myenvname ratt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ratt:<tag>

   (see `ratt/tags`_ for valid values for ``<tag>``)


.. |downloads_ratt| image:: https://img.shields.io/conda/dn/bioconda/ratt.svg?style=flat
   :target: https://anaconda.org/bioconda/ratt
   :alt:   (downloads)
.. |docker_ratt| image:: https://quay.io/repository/biocontainers/ratt/status
   :target: https://quay.io/repository/biocontainers/ratt
.. _`ratt/tags`: https://quay.io/repository/biocontainers/ratt?tab=tags


.. raw:: html

    <script>
        var package = "ratt";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ratt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ratt/README.html