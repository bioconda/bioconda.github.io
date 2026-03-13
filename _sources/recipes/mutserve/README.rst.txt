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

      

   
   :depends on openjdk: ``>=11``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install mutserve

to add into an existing workspace instead, run::

    pixi add mutserve

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mutserve

Alternatively, to install into a new environment, run::

    conda create -n envname mutserve

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mutserve:<tag>

(see `mutserve/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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