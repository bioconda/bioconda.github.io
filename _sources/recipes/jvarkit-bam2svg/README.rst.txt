:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jvarkit-bam2svg'
.. highlight: bash

jvarkit-bam2svg
===============

.. conda:recipe:: jvarkit-bam2svg
   :replaces_section_title:
   :noindex:

   BAM to Scalar Vector Graphics \(SVG\)

   :homepage: http://lindenb.github.io/jvarkit/BamToSVG.html
   :license: MIT
   :recipe: /`jvarkit-bam2svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jvarkit-bam2svg/meta.yaml>`_

   


.. conda:package:: jvarkit-bam2svg

   |downloads_jvarkit-bam2svg| |docker_jvarkit-bam2svg|

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

    pixi global install jvarkit-bam2svg

to add into an existing workspace instead, run::

    pixi add jvarkit-bam2svg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jvarkit-bam2svg

Alternatively, to install into a new environment, run::

    conda create -n envname jvarkit-bam2svg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jvarkit-bam2svg:<tag>

(see `jvarkit-bam2svg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jvarkit-bam2svg| image:: https://img.shields.io/conda/dn/bioconda/jvarkit-bam2svg.svg?style=flat
   :target: https://anaconda.org/bioconda/jvarkit-bam2svg
   :alt:   (downloads)
.. |docker_jvarkit-bam2svg| image:: https://quay.io/repository/biocontainers/jvarkit-bam2svg/status
   :target: https://quay.io/repository/biocontainers/jvarkit-bam2svg
.. _`jvarkit-bam2svg/tags`: https://quay.io/repository/biocontainers/jvarkit-bam2svg?tab=tags


.. raw:: html

    <script>
        var package = "jvarkit-bam2svg";
        var versions = ["201904251722","201904251722"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jvarkit-bam2svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jvarkit-bam2svg/README.html