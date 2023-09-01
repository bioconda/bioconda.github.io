:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nucdiff'
.. highlight: bash

nucdiff
=======

.. conda:recipe:: nucdiff
   :replaces_section_title:
   :noindex:

   NucDiff locates and categorizes differences between two closely related nucleotide sequences.

   :homepage: https://github.com/uio-cels/NucDiff
   :license: MPL-2.0
   :recipe: /`nucdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nucdiff/meta.yaml>`_

   


.. conda:package:: nucdiff

   |downloads_nucdiff| |docker_nucdiff|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-3``,  ``2.0.2-2``,  ``2.0.2-0``,  ``0.1.1-0``

      

   
   :depends biopython: 
   :depends mummer: 
   :depends python: 
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

      mamba install nucdiff

   and update with::

      mamba update nucdiff

  To create a new environment, run::

      mamba create --name myenvname nucdiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nucdiff:<tag>

   (see `nucdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_nucdiff| image:: https://img.shields.io/conda/dn/bioconda/nucdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/nucdiff
   :alt:   (downloads)
.. |docker_nucdiff| image:: https://quay.io/repository/biocontainers/nucdiff/status
   :target: https://quay.io/repository/biocontainers/nucdiff
.. _`nucdiff/tags`: https://quay.io/repository/biocontainers/nucdiff?tab=tags


.. raw:: html

    <script>
        var package = "nucdiff";
        var versions = ["2.0.3","2.0.3","2.0.2","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nucdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nucdiff/README.html