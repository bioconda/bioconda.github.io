:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantwiz-iq'
.. highlight: bash

quantwiz-iq
===========

.. conda:recipe:: quantwiz-iq
   :replaces_section_title:
   :noindex:

   QuantWiz\-IQ is a tool for reporter based MS\/MS quantitation using iTRAQ or TMT tags from shotgun proteomics experiments.

   :homepage: https://sourceforge.net/projects/quantwiz/
   :license: GPL
   :recipe: /`quantwiz-iq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantwiz-iq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantwiz-iq/meta.yaml>`_

   


.. conda:package:: quantwiz-iq

   |downloads_quantwiz-iq| |docker_quantwiz-iq|

   :versions:
      
      

      ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends perl: 
   :depends perl-math-matrix: ``0.8.*``
   :depends perl-math-matrixreal: ``2.13.*``
   :depends perl-mime-base64: ``3.15.*``
   :depends perl-xml-twig: ``3.52.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install quantwiz-iq

   and update with::

      mamba update quantwiz-iq

  To create a new environment, run::

      mamba create --name myenvname quantwiz-iq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/quantwiz-iq:<tag>

   (see `quantwiz-iq/tags`_ for valid values for ``<tag>``)


.. |downloads_quantwiz-iq| image:: https://img.shields.io/conda/dn/bioconda/quantwiz-iq.svg?style=flat
   :target: https://anaconda.org/bioconda/quantwiz-iq
   :alt:   (downloads)
.. |docker_quantwiz-iq| image:: https://quay.io/repository/biocontainers/quantwiz-iq/status
   :target: https://quay.io/repository/biocontainers/quantwiz-iq
.. _`quantwiz-iq/tags`: https://quay.io/repository/biocontainers/quantwiz-iq?tab=tags


.. raw:: html

    <script>
        var package = "quantwiz-iq";
        var versions = ["2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantwiz-iq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantwiz-iq/README.html