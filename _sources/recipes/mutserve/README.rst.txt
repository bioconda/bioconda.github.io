:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mutserve'
.. highlight: bash

mutserve
========

.. conda:recipe:: mutserve
   :replaces_section_title:
   :noindex:

   Mutserve2 is a variant caller for the mitochondrial genome to detect homoplasmic and heteroplasmic sites in sequence data.

   :homepage: https://github.com/seppinho/mutserve
   :license: MIT
   :recipe: /`mutserve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutserve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mutserve/meta.yaml>`_

   Mutserve Variant Calling\:
   \`\`\`
   mutserve call 
     \-\-reference rCRS.fasta 
     \-\-output HG00096.vcf.gz 
     \-\-threads 4 
     \*.bam
   \`\`\`
   The full list of parameters is available \[here\]\(https\:\/\/github.com\/seppinho\/mutserve\#\:\~\:text\=output\%20AnnotatedVariants.txt\-\,Parameters\,\-Parameter\).


   Mutserve Variant Annotation\:
   \`\`\`
   mutserve annotate 
     \-\-input variantfile.txt 
     \-\-annotation rCRS\_annotation\_2020\-08\-20.txt 
     \-\-output AnnotatedVariants.txt
   \`\`\`
   \`rCRS.fasta\`\, \`rCRS\_annotation\_2020\-08\-20.txt\`\, and \`rCRS\_annotation\_descriptions.md\` are available in the Mutserve2 repository \(\`\$MUTSERVE\_DATA\/\`\).



.. conda:package:: mutserve

   |downloads_mutserve| |docker_mutserve|

   :versions:
      
      

      ``2.0.3-0``

      

   
   :depends openjdk: ``>=11``
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

      mamba install mutserve

   and update with::

      mamba update mutserve

  To create a new environment, run::

      mamba create --name myenvname mutserve

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mutserve:<tag>

   (see `mutserve/tags`_ for valid values for ``<tag>``)


.. |downloads_mutserve| image:: https://img.shields.io/conda/dn/bioconda/mutserve.svg?style=flat
   :target: https://anaconda.org/bioconda/mutserve
   :alt:   (downloads)
.. |docker_mutserve| image:: https://quay.io/repository/biocontainers/mutserve/status
   :target: https://quay.io/repository/biocontainers/mutserve
.. _`mutserve/tags`: https://quay.io/repository/biocontainers/mutserve?tab=tags


.. raw:: html

    <script>
        var package = "mutserve";
        var versions = ["2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mutserve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mutserve/README.html