:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igvtools'
.. highlight: bash

igvtools
========

.. conda:recipe:: igvtools
   :replaces_section_title:
   :noindex:

   Command line tools for IGV

   :homepage: http://www.broadinstitute.org/igv/
   :license: MIT / MIT
   :recipe: /`igvtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools/meta.yaml>`_
   :links: biotools: :biotools:`IGVtools`

   


.. conda:package:: igvtools

   |downloads_igvtools| |docker_igvtools|

   :versions:
      
      

      ``2.17.3-0``,  ``2.16.2-0``,  ``2.14.1-0``,  ``2.5.3-1``,  ``2.5.3-0``,  ``2.3.93-0``,  ``2.3.75-1``,  ``2.3.48-1``,  ``2.3.16-0``

      

   
   :depends on openjdk: ``>=17``

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

    pixi global install igvtools

to add into an existing workspace instead, run::

    pixi add igvtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igvtools

Alternatively, to install into a new environment, run::

    conda create -n envname igvtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igvtools:<tag>

(see `igvtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igvtools| image:: https://img.shields.io/conda/dn/bioconda/igvtools.svg?style=flat
   :target: https://anaconda.org/bioconda/igvtools
   :alt:   (downloads)
.. |docker_igvtools| image:: https://quay.io/repository/biocontainers/igvtools/status
   :target: https://quay.io/repository/biocontainers/igvtools
.. _`igvtools/tags`: https://quay.io/repository/biocontainers/igvtools?tab=tags


.. raw:: html

    <script>
        var package = "igvtools";
        var versions = ["2.17.3","2.16.2","2.14.1","2.5.3","2.5.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igvtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igvtools/README.html