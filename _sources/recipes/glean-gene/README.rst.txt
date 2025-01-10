:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glean-gene'
.. highlight: bash

glean-gene
==========

.. conda:recipe:: glean-gene
   :replaces_section_title:
   :noindex:

   GLEAN is an unsupervised learning system to integrate disparate sources of gene structure evidence \(gene model predictions\, EST\/protein genomic sequence alignments\, SAGE\/peptide tags\, etc\) to produce a consensus gene prediction\, without prior training.

   :homepage: https://sourceforge.net/projects/glean-gene/
   :license: Artistic-1.0-Perl
   :recipe: /`glean-gene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glean-gene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glean-gene/meta.yaml>`_

   


.. conda:package:: glean-gene

   |downloads_glean-gene| |docker_glean-gene|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends graphviz: 
   :depends perl: 
   :depends perl-algorithm-diff: 
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-module-pluggable: 
   :depends perl-storable: 
   :depends perl-yaml: 
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

      mamba install glean-gene

   and update with::

      mamba update glean-gene

  To create a new environment, run::

      mamba create --name myenvname glean-gene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/glean-gene:<tag>

   (see `glean-gene/tags`_ for valid values for ``<tag>``)


.. |downloads_glean-gene| image:: https://img.shields.io/conda/dn/bioconda/glean-gene.svg?style=flat
   :target: https://anaconda.org/bioconda/glean-gene
   :alt:   (downloads)
.. |docker_glean-gene| image:: https://quay.io/repository/biocontainers/glean-gene/status
   :target: https://quay.io/repository/biocontainers/glean-gene
.. _`glean-gene/tags`: https://quay.io/repository/biocontainers/glean-gene?tab=tags


.. raw:: html

    <script>
        var package = "glean-gene";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glean-gene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glean-gene/README.html