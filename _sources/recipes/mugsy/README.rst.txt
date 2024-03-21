:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mugsy'
.. highlight: bash

mugsy
=====

.. conda:recipe:: mugsy
   :replaces_section_title:
   :noindex:

   Mugsy is a multiple whole genome aligner.

   :homepage: http://mugsy.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`mugsy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy/meta.yaml>`_

   


.. conda:package:: mugsy

   |downloads_mugsy| |docker_mugsy|

   :versions:
      
      

      ``1.2.3-5``,  ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends perl: 
   :depends sed: 
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

      mamba install mugsy

   and update with::

      mamba update mugsy

  To create a new environment, run::

      mamba create --name myenvname mugsy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mugsy:<tag>

   (see `mugsy/tags`_ for valid values for ``<tag>``)


.. |downloads_mugsy| image:: https://img.shields.io/conda/dn/bioconda/mugsy.svg?style=flat
   :target: https://anaconda.org/bioconda/mugsy
   :alt:   (downloads)
.. |docker_mugsy| image:: https://quay.io/repository/biocontainers/mugsy/status
   :target: https://quay.io/repository/biocontainers/mugsy
.. _`mugsy/tags`: https://quay.io/repository/biocontainers/mugsy?tab=tags


.. raw:: html

    <script>
        var package = "mugsy";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mugsy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mugsy/README.html