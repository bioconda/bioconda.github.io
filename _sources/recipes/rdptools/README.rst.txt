:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdptools'
.. highlight: bash

rdptools
========

.. conda:recipe:: rdptools
   :replaces_section_title:
   :noindex:

   Metaproject for RDP Tools

   :homepage: http://rdp.cme.msu.edu/misc/resources.jsp
   :license: `CC / Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) <https://creativecommons.org/licenses/by-sa/3.0/legalcode>`_
   :recipe: /`rdptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools/meta.yaml>`_

   


.. conda:package:: rdptools

   |downloads_rdptools| |docker_rdptools|

   :versions:
      
      

      ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends on openjdk: ``8.0.*``
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

    pixi global install rdptools

to add into an existing workspace instead, run::

    pixi add rdptools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rdptools

Alternatively, to install into a new environment, run::

    conda create -n envname rdptools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rdptools:<tag>

(see `rdptools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rdptools| image:: https://img.shields.io/conda/dn/bioconda/rdptools.svg?style=flat
   :target: https://anaconda.org/bioconda/rdptools
   :alt:   (downloads)
.. |docker_rdptools| image:: https://quay.io/repository/biocontainers/rdptools/status
   :target: https://quay.io/repository/biocontainers/rdptools
.. _`rdptools/tags`: https://quay.io/repository/biocontainers/rdptools?tab=tags


.. raw:: html

    <script>
        var package = "rdptools";
        var versions = ["2.0.3","2.0.3","2.0.2","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdptools/README.html