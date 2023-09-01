:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proksee'
.. highlight: bash

proksee
=======

.. conda:recipe:: proksee
   :replaces_section_title:
   :noindex:

   Proksee is a suite of command line tools for performing assembly\, annotation and visualization of microbial genomes.

   :homepage: https://github.com/proksee-project/proksee-cmd
   :license: Apache License, Version 2.0
   :recipe: /`proksee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proksee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proksee/meta.yaml>`_

   


.. conda:package:: proksee

   |downloads_proksee| |docker_proksee|

   :versions:
      
      

      ``1.0.0a6-0``,  ``1.0.0a5-0``,  ``1.0.0a4-0``,  ``1.0.0a3-0``,  ``1.0.0a2-0``,  ``1.0.0a1-0``

      

   
   :depends click: 
   :depends fastp: ``0.22.0.*``
   :depends joblib: ``1.0.1.*``
   :depends mash: 
   :depends numpy: ``1.19.5.*``
   :depends python: ``3.7.*``
   :depends quast: ``5.0.2.*``
   :depends scikit-learn: ``0.24.1.*``
   :depends scipy: 
   :depends skesa: 
   :depends spades: 
   :depends wget: 
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

      mamba install proksee

   and update with::

      mamba update proksee

  To create a new environment, run::

      mamba create --name myenvname proksee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proksee:<tag>

   (see `proksee/tags`_ for valid values for ``<tag>``)


.. |downloads_proksee| image:: https://img.shields.io/conda/dn/bioconda/proksee.svg?style=flat
   :target: https://anaconda.org/bioconda/proksee
   :alt:   (downloads)
.. |docker_proksee| image:: https://quay.io/repository/biocontainers/proksee/status
   :target: https://quay.io/repository/biocontainers/proksee
.. _`proksee/tags`: https://quay.io/repository/biocontainers/proksee?tab=tags


.. raw:: html

    <script>
        var package = "proksee";
        var versions = ["1.0.0a6","1.0.0a5","1.0.0a4","1.0.0a3","1.0.0a2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proksee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proksee/README.html