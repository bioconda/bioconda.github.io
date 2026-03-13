:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'find_circ'
.. highlight: bash

find_circ
=========

.. conda:recipe:: find_circ
   :replaces_section_title:
   :noindex:

   Detect head\-to\-tail spliced \(back\-spliced\) sequencing reads\, indicative of circular RNA \(circRNA\) in RNA\-seq data.

   :homepage: https://github.com/marvin-jens/find_circ
   :license: GPL-3
   :recipe: /`find_circ <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_circ>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/find_circ/meta.yaml>`_

   


.. conda:package:: find_circ

   |downloads_find_circ| |docker_find_circ|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends on numpy: ``>=1.16.4``
   :depends on pysam: ``>=0.15.2``
   :depends on python: ``2.7.*``

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

    pixi global install find_circ

to add into an existing workspace instead, run::

    pixi add find_circ

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install find_circ

Alternatively, to install into a new environment, run::

    conda create -n envname find_circ

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/find_circ:<tag>

(see `find_circ/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_find_circ| image:: https://img.shields.io/conda/dn/bioconda/find_circ.svg?style=flat
   :target: https://anaconda.org/bioconda/find_circ
   :alt:   (downloads)
.. |docker_find_circ| image:: https://quay.io/repository/biocontainers/find_circ/status
   :target: https://quay.io/repository/biocontainers/find_circ
.. _`find_circ/tags`: https://quay.io/repository/biocontainers/find_circ?tab=tags


.. raw:: html

    <script>
        var package = "find_circ";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/find_circ/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/find_circ/README.html