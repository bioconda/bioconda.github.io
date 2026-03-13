:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'count_constant_sites'
.. highlight: bash

count_constant_sites
====================

.. conda:recipe:: count_constant_sites
   :replaces_section_title:
   :noindex:

   Compute the count of cases in constant sites in a \(FASTA\) multiple sequence alignment

   :homepage: https://github.com/pvanheus/count_constant_sites
   :license: MIT
   :recipe: /`count_constant_sites <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/count_constant_sites/meta.yaml>`_

   Given a FASTA file with a multiple sequence alignment of nucleotides\,
   this tool counts the sites in the alignment that are constant. The 
   output is a line suitable for use in IQTREE\'s \`\-fconst\`\, thus 4 numbers
   with commas expressing the count of As\, Cs\, Gs and Ts.



.. conda:package:: count_constant_sites

   |downloads_count_constant_sites| |docker_count_constant_sites|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``

      

   

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

    pixi global install count_constant_sites

to add into an existing workspace instead, run::

    pixi add count_constant_sites

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install count_constant_sites

Alternatively, to install into a new environment, run::

    conda create -n envname count_constant_sites

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/count_constant_sites:<tag>

(see `count_constant_sites/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_count_constant_sites| image:: https://img.shields.io/conda/dn/bioconda/count_constant_sites.svg?style=flat
   :target: https://anaconda.org/bioconda/count_constant_sites
   :alt:   (downloads)
.. |docker_count_constant_sites| image:: https://quay.io/repository/biocontainers/count_constant_sites/status
   :target: https://quay.io/repository/biocontainers/count_constant_sites
.. _`count_constant_sites/tags`: https://quay.io/repository/biocontainers/count_constant_sites?tab=tags


.. raw:: html

    <script>
        var package = "count_constant_sites";
        var versions = ["0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/count_constant_sites/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/count_constant_sites/README.html