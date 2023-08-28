:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scg'
.. highlight: bash

scg
===

.. conda:recipe:: scg
   :replaces_section_title:
   :noindex:

   The single cell genotyper \(SCG\)\: \"Roth A\, McPherson A\, Laks E\, Biele J\, Yap D\, Wan A\, et al. Clonal genotype and population structure inference from single\-cell tumor sequencing. Nat Meth. 2016\;13\: 573–576. doi\:10.1038\/nmeth.3867\"

   :homepage: https://bitbucket.org/aroth85/scg/wiki/Home
   :license: GPL-3
   :recipe: /`scg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scg/meta.yaml>`_

   


.. conda:package:: scg

   |downloads_scg| |docker_scg|

   :versions:
      
      

      ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends numpy: ``>=1.9.2``
   :depends pandas: ``>=0.16``
   :depends python: ``<3``
   :depends pyyaml: 
   :depends scipy: ``>=0.15``
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

      mamba install scg

   and update with::

      mamba update scg

  To create a new environment, run::

      mamba create --name myenvname scg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scg:<tag>

   (see `scg/tags`_ for valid values for ``<tag>``)


.. |downloads_scg| image:: https://img.shields.io/conda/dn/bioconda/scg.svg?style=flat
   :target: https://anaconda.org/bioconda/scg
   :alt:   (downloads)
.. |docker_scg| image:: https://quay.io/repository/biocontainers/scg/status
   :target: https://quay.io/repository/biocontainers/scg
.. _`scg/tags`: https://quay.io/repository/biocontainers/scg?tab=tags


.. raw:: html

    <script>
        var package = "scg";
        var versions = ["0.3.1","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scg/README.html