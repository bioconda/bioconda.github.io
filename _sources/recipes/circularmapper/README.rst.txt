:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circularmapper'
.. highlight: bash

circularmapper
==============

.. conda:recipe:: circularmapper
   :replaces_section_title:
   :noindex:

    A method to improve mappings on circular genomes\, using the BWA mapper.

   :homepage: https://github.com/apeltzer/CircularMapper
   :license: GPLv3
   :recipe: /`circularmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circularmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circularmapper/meta.yaml>`_

   


.. conda:package:: circularmapper

   |downloads_circularmapper| |docker_circularmapper|

   :versions:
      
      

      ``1.93.5-3``,  ``1.93.5-2``,  ``1.93.5-1``,  ``1.93.5-0``,  ``1.93.4-1``,  ``1.93.4-0``

      

   
   :depends on openjdk: 
   :depends on python: 

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

    pixi global install circularmapper

to add into an existing workspace instead, run::

    pixi add circularmapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circularmapper

Alternatively, to install into a new environment, run::

    conda create -n envname circularmapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circularmapper:<tag>

(see `circularmapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circularmapper| image:: https://img.shields.io/conda/dn/bioconda/circularmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/circularmapper
   :alt:   (downloads)
.. |docker_circularmapper| image:: https://quay.io/repository/biocontainers/circularmapper/status
   :target: https://quay.io/repository/biocontainers/circularmapper
.. _`circularmapper/tags`: https://quay.io/repository/biocontainers/circularmapper?tab=tags


.. raw:: html

    <script>
        var package = "circularmapper";
        var versions = ["1.93.5","1.93.5","1.93.5","1.93.5","1.93.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circularmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circularmapper/README.html