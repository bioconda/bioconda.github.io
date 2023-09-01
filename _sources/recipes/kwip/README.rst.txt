:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kwip'
.. highlight: bash

kwip
====

.. conda:recipe:: kwip
   :replaces_section_title:
   :noindex:

   kWIP implements a de novo\, alignment free measure of sample genetic dissimilarity

   :homepage: https://github.com/kdmurray91/kWIP
   :license: GNU General Public License version 3
   :recipe: /`kwip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kwip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kwip/meta.yaml>`_
   :links: biotools: :biotools:`kWIP`, doi: :doi:`https://doi.org/10.1371/journal.pcbi.1005727`

   


.. conda:package:: kwip

   |downloads_kwip| |docker_kwip|

   :versions:
      
      

      ``0.2.0-6``,  ``0.2.0-5``,  ``0.2.0-4``,  ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends khmer: 
   :depends libcxx: ``>=15.0.7``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install kwip

   and update with::

      mamba update kwip

  To create a new environment, run::

      mamba create --name myenvname kwip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kwip:<tag>

   (see `kwip/tags`_ for valid values for ``<tag>``)


.. |downloads_kwip| image:: https://img.shields.io/conda/dn/bioconda/kwip.svg?style=flat
   :target: https://anaconda.org/bioconda/kwip
   :alt:   (downloads)
.. |docker_kwip| image:: https://quay.io/repository/biocontainers/kwip/status
   :target: https://quay.io/repository/biocontainers/kwip
.. _`kwip/tags`: https://quay.io/repository/biocontainers/kwip?tab=tags


.. raw:: html

    <script>
        var package = "kwip";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0","0.2.0"];
    </script>





Notes
-----
The k\-mer Weighted Inner Product \(kWIP\) implements a de novo\, alignment free measure of sample genetic dissimilarity which operates upon raw sequencing reads. It is able to calculate the genetic dissimilarity between samples without any reference genome\, and without assembling one.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kwip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kwip/README.html