:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ragtag'
.. highlight: bash

ragtag
======

.. conda:recipe:: ragtag
   :replaces_section_title:
   :noindex:

   Fast reference\-guided genome assembly scaffolding

   :homepage: https://github.com/malonge/RagTag
   :documentation: https://github.com/malonge/RagTag/wiki
   
   :license: MIT / MIT
   :recipe: /`ragtag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ragtag/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.3887139`

   


.. conda:package:: ragtag

   |downloads_ragtag| |docker_ragtag|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends intervaltree: 
   :depends minimap2: 
   :depends mummer: 
   :depends networkx: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>3``
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

      mamba install ragtag

   and update with::

      mamba update ragtag

  To create a new environment, run::

      mamba create --name myenvname ragtag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ragtag:<tag>

   (see `ragtag/tags`_ for valid values for ``<tag>``)


.. |downloads_ragtag| image:: https://img.shields.io/conda/dn/bioconda/ragtag.svg?style=flat
   :target: https://anaconda.org/bioconda/ragtag
   :alt:   (downloads)
.. |docker_ragtag| image:: https://quay.io/repository/biocontainers/ragtag/status
   :target: https://quay.io/repository/biocontainers/ragtag
.. _`ragtag/tags`: https://quay.io/repository/biocontainers/ragtag?tab=tags


.. raw:: html

    <script>
        var package = "ragtag";
        var versions = ["2.1.0","2.0.1","2.0.0","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ragtag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ragtag/README.html