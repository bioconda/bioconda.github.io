:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unikseq'
.. highlight: bash

unikseq
=======

.. conda:recipe:: unikseq
   :replaces_section_title:
   :noindex:

   Unique DNA sequence region identification\, using a k\-mer approach

   :homepage: https://github.com/bcgsc/unikseq
   :license: GPL-3.0
   :recipe: /`unikseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unikseq/meta.yaml>`_

   


.. conda:package:: unikseq

   |downloads_unikseq| |docker_unikseq|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.0.0-0``

      

   
   :depends links: ``1.8.7.*``
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

      mamba install unikseq

   and update with::

      mamba update unikseq

  To create a new environment, run::

      mamba create --name myenvname unikseq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/unikseq:<tag>

   (see `unikseq/tags`_ for valid values for ``<tag>``)


.. |downloads_unikseq| image:: https://img.shields.io/conda/dn/bioconda/unikseq.svg?style=flat
   :target: https://anaconda.org/bioconda/unikseq
   :alt:   (downloads)
.. |docker_unikseq| image:: https://quay.io/repository/biocontainers/unikseq/status
   :target: https://quay.io/repository/biocontainers/unikseq
.. _`unikseq/tags`: https://quay.io/repository/biocontainers/unikseq?tab=tags


.. raw:: html

    <script>
        var package = "unikseq";
        var versions = ["1.3.4","1.3.3","1.3.2","1.3.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unikseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unikseq/README.html