:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'variant-extractor'
.. highlight: bash

variant-extractor
=================

.. conda:recipe:: variant-extractor
   :replaces_section_title:
   :noindex:

   Deterministic and standard extractor of indels\, SNVs and structural variants \(SVs\) from VCF files.

   :homepage: https://pypi.org/project/variant-extractor/
   :license: MIT
   :recipe: /`variant-extractor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant-extractor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/variant-extractor/meta.yaml>`_

   


.. conda:package:: variant-extractor

   |downloads_variant-extractor| |docker_variant-extractor|

   :versions:
      
      

      ``5.1.0-0``,  ``5.0.0-0``

      

   
   :depends on pysam: ``>=0.22.1``
   :depends on python: ``>=3.6``

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

    pixi global install variant-extractor

to add into an existing workspace instead, run::

    pixi add variant-extractor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install variant-extractor

Alternatively, to install into a new environment, run::

    conda create -n envname variant-extractor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/variant-extractor:<tag>

(see `variant-extractor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_variant-extractor| image:: https://img.shields.io/conda/dn/bioconda/variant-extractor.svg?style=flat
   :target: https://anaconda.org/bioconda/variant-extractor
   :alt:   (downloads)
.. |docker_variant-extractor| image:: https://quay.io/repository/biocontainers/variant-extractor/status
   :target: https://quay.io/repository/biocontainers/variant-extractor
.. _`variant-extractor/tags`: https://quay.io/repository/biocontainers/variant-extractor?tab=tags


.. raw:: html

    <script>
        var package = "variant-extractor";
        var versions = ["5.1.0","5.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/variant-extractor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/variant-extractor/README.html