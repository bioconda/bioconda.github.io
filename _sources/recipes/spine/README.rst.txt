:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spine'
.. highlight: bash

spine
=====

.. conda:recipe:: spine
   :replaces_section_title:
   :noindex:

   Identification of conserved nucleotide core genome of bacteria and other small genome organisms

   :homepage: https://github.com/egonozer/Spine
   :license: GPL-3.0
   :recipe: /`spine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine/meta.yaml>`_

   


.. conda:package:: spine

   |downloads_spine| |docker_spine|

   :versions:
      
      

      ``0.3.2-2``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends mummer: ``>=3.22``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-which: 
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

      mamba install spine

   and update with::

      mamba update spine

  To create a new environment, run::

      mamba create --name myenvname spine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spine:<tag>

   (see `spine/tags`_ for valid values for ``<tag>``)


.. |downloads_spine| image:: https://img.shields.io/conda/dn/bioconda/spine.svg?style=flat
   :target: https://anaconda.org/bioconda/spine
   :alt:   (downloads)
.. |docker_spine| image:: https://quay.io/repository/biocontainers/spine/status
   :target: https://quay.io/repository/biocontainers/spine
.. _`spine/tags`: https://quay.io/repository/biocontainers/spine?tab=tags


.. raw:: html

    <script>
        var package = "spine";
        var versions = ["0.3.2","0.3.2","0.3.2","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spine/README.html