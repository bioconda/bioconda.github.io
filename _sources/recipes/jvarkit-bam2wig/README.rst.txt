:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-bam2wig'
.. highlight: bash

jvarkit-bam2wig
===============

.. conda:recipe:: jvarkit-bam2wig
   :replaces_section_title:
   :noindex:

   Bam to fixedStep Wiggle converter\, or BED GRAPH.

   :homepage: http://lindenb.github.io/jvarkit/Bam2Wig.html
   :license: MIT
   :recipe: /`jvarkit-bam2wig <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2wig>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2wig/meta.yaml>`_

   


.. conda:package:: jvarkit-bam2wig

   |downloads_jvarkit-bam2wig| |docker_jvarkit-bam2wig|

   :versions:
      
      

      ``201904251722-1``,  ``201904251722-0``

      

   
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

    pixi global install jvarkit-bam2wig

to add into an existing workspace instead, run::

    pixi add jvarkit-bam2wig

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jvarkit-bam2wig

Alternatively, to install into a new environment, run::

    conda create -n envname jvarkit-bam2wig

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jvarkit-bam2wig:<tag>

(see `jvarkit-bam2wig/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jvarkit-bam2wig| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-bam2wig.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-bam2wig
   :alt:   (downloads)
.. |docker_jvarkit-bam2wig| image:: https://quay.io/repository/biocontainers/jvarkit-bam2wig/status
   :target: https://quay.io/repository/biocontainers/jvarkit-bam2wig
.. _`jvarkit-bam2wig/tags`: https://quay.io/repository/biocontainers/jvarkit-bam2wig?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-bam2wig";
        var versions = ["201904251722","201904251722"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-bam2wig/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-bam2wig/README.html