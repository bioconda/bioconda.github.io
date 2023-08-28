:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pedesigner'
.. highlight: bash

pedesigner
==========

.. conda:recipe:: pedesigner
   :replaces_section_title:
   :noindex:

   A tool for prime\-editing guideRNA \(pegRNA\) design

   :homepage: https://github.com/VeredKunik/pedesigner
   :license: GPL / GPL-3.0-only
   :recipe: /`pedesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pedesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pedesigner/meta.yaml>`_

   


.. conda:package:: pedesigner

   |downloads_pedesigner| |docker_pedesigner|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends cas-offinder: 
   :depends python: ``>=3.7``
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

      mamba install pedesigner

   and update with::

      mamba update pedesigner

  To create a new environment, run::

      mamba create --name myenvname pedesigner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pedesigner:<tag>

   (see `pedesigner/tags`_ for valid values for ``<tag>``)


.. |downloads_pedesigner| image:: https://img.shields.io/conda/dn/bioconda/pedesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/pedesigner
   :alt:   (downloads)
.. |docker_pedesigner| image:: https://quay.io/repository/biocontainers/pedesigner/status
   :target: https://quay.io/repository/biocontainers/pedesigner
.. _`pedesigner/tags`: https://quay.io/repository/biocontainers/pedesigner?tab=tags


.. raw:: html

    <script>
        var package = "pedesigner";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pedesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pedesigner/README.html