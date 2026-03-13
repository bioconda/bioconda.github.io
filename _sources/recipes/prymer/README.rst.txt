:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prymer'
.. highlight: bash

prymer
======

.. conda:recipe:: prymer
   :replaces_section_title:
   :noindex:

   Python Primer Design Library

   :homepage: https://pypi.org/project/prymer/
   :documentation: https://prymer.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/fulcrumgenomics/prymer
   :license: MIT / MIT
   :recipe: /`prymer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prymer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prymer/meta.yaml>`_

   


.. conda:package:: prymer

   |downloads_prymer| |docker_prymer|

   :versions:
      
      

      ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``,  ``2.2.0-0``,  ``2.1.1-0``,  ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on bwa-aln-interactive: ``>=0.7.18``
   :depends on primer3: ``>=2.6.1``
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.11``

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

    pixi global install prymer

to add into an existing workspace instead, run::

    pixi add prymer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install prymer

Alternatively, to install into a new environment, run::

    conda create -n envname prymer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/prymer:<tag>

(see `prymer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_prymer| image:: https://img.shields.io/conda/dn/bioconda/prymer.svg?style=flat
   :target: https://anaconda.org/bioconda/prymer
   :alt:   (downloads)
.. |docker_prymer| image:: https://quay.io/repository/biocontainers/prymer/status
   :target: https://quay.io/repository/biocontainers/prymer
.. _`prymer/tags`: https://quay.io/repository/biocontainers/prymer?tab=tags


.. raw:: html

    <script>
        var package = "prymer";
        var versions = ["3.0.2","3.0.2","3.0.1","3.0.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prymer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prymer/README.html