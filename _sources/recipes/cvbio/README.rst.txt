:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cvbio'
.. highlight: bash

cvbio
=====

.. conda:recipe:: cvbio
   :replaces_section_title:
   :noindex:

   Tools for working with genomic and sequencing data\, including multi\-species read disambiguation

   :homepage: https://github.com/clintval/cvbio
   :license: MIT / MIT
   :recipe: /`cvbio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvbio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cvbio/meta.yaml>`_

   


.. conda:package:: cvbio

   |downloads_cvbio| |docker_cvbio|

   :versions:
      
      

      ``3.0.0-1``,  ``3.0.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.0-0``

      

   
   :depends openjdk: ``>=8``
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

      mamba install cvbio

   and update with::

      mamba update cvbio

  To create a new environment, run::

      mamba create --name myenvname cvbio

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cvbio:<tag>

   (see `cvbio/tags`_ for valid values for ``<tag>``)


.. |downloads_cvbio| image:: https://img.shields.io/conda/dn/bioconda/cvbio.svg?style=flat
   :target: https://anaconda.org/bioconda/cvbio
   :alt:   (downloads)
.. |docker_cvbio| image:: https://quay.io/repository/biocontainers/cvbio/status
   :target: https://quay.io/repository/biocontainers/cvbio
.. _`cvbio/tags`: https://quay.io/repository/biocontainers/cvbio?tab=tags


.. raw:: html

    <script>
        var package = "cvbio";
        var versions = ["3.0.0","3.0.0","2.1.0","2.0.0","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cvbio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cvbio/README.html