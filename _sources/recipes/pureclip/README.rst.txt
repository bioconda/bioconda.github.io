:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pureclip'
.. highlight: bash

pureclip
========

.. conda:recipe:: pureclip
   :replaces_section_title:
   :noindex:

   PureCLIP is a tool to detect protein\-RNA interaction footprints from single\-nucleotide CLIP\-seq data\, such as iCLIP and eCLIP.

   :homepage: https://github.com/skrakau/PureCLIP
   :license: GPLv3
   :recipe: /`pureclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pureclip/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1364-2`

   


.. conda:package:: pureclip

   |downloads_pureclip| |docker_pureclip|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-1``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends bedtools: 
   :depends meme: 
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

      mamba install pureclip

   and update with::

      mamba update pureclip

  To create a new environment, run::

      mamba create --name myenvname pureclip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pureclip:<tag>

   (see `pureclip/tags`_ for valid values for ``<tag>``)


.. |downloads_pureclip| image:: https://img.shields.io/conda/dn/bioconda/pureclip.svg?style=flat
   :target: https://anaconda.org/bioconda/pureclip
   :alt:   (downloads)
.. |docker_pureclip| image:: https://quay.io/repository/biocontainers/pureclip/status
   :target: https://quay.io/repository/biocontainers/pureclip
.. _`pureclip/tags`: https://quay.io/repository/biocontainers/pureclip?tab=tags


.. raw:: html

    <script>
        var package = "pureclip";
        var versions = ["1.3.1","1.3.0","1.2.0","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pureclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pureclip/README.html