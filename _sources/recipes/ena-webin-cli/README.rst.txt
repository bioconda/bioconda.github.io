:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-webin-cli'
.. highlight: bash

ena-webin-cli
=============

.. conda:recipe:: ena-webin-cli
   :replaces_section_title:
   :noindex:

   Data submissions to ENA can be made using the Webin command line submission interface \(Webin\-CLI\).

   :homepage: https://github.com/enasequence/webin-cli
   :license: Apache-2.0
   :recipe: /`ena-webin-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli/meta.yaml>`_

   


.. conda:package:: ena-webin-cli

   |downloads_ena-webin-cli| |docker_ena-webin-cli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>9.0.3-0</code>,  <code>9.0.2-0</code>,  <code>9.0.1-1</code>,  <code>9.0.1-0</code>,  <code>9.0.0-0</code>,  <code>8.3.0-0</code>,  <code>8.2.0-0</code>,  <code>8.1.1-1</code>,  <code>8.1.1-0</code>,  </span></summary>
      

      ``9.0.3-0``,  ``9.0.2-0``,  ``9.0.1-1``,  ``9.0.1-0``,  ``9.0.0-0``,  ``8.3.0-0``,  ``8.2.0-0``,  ``8.1.1-1``,  ``8.1.1-0``,  ``8.1.0-0``,  ``8.0.0-0``,  ``7.3.1-0``,  ``7.3.0-0``,  ``7.2.1-0``,  ``7.2.0-0``,  ``7.1.1-0``,  ``7.1.0-0``,  ``7.0.1-0``,  ``7.0.0-0``,  ``6.10.0-0``,  ``6.9.0-0``,  ``6.8.0-0``,  ``6.7.2-0``,  ``6.7.1-0``,  ``6.7.0-0``,  ``6.6.0-0``,  ``6.5.1-0``,  ``5.0.0-0``,  ``4.4.0-0``,  ``4.3.0-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-0``,  ``3.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on openjdk: ``>=17``
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

    pixi global install ena-webin-cli

to add into an existing workspace instead, run::

    pixi add ena-webin-cli

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ena-webin-cli

Alternatively, to install into a new environment, run::

    conda create -n envname ena-webin-cli

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ena-webin-cli:<tag>

(see `ena-webin-cli/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ena-webin-cli| image:: https://img.shields.io/conda/dn/bioconda/ena-webin-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-webin-cli
   :alt:   (downloads)
.. |docker_ena-webin-cli| image:: https://quay.io/repository/biocontainers/ena-webin-cli/status
   :target: https://quay.io/repository/biocontainers/ena-webin-cli
.. _`ena-webin-cli/tags`: https://quay.io/repository/biocontainers/ena-webin-cli?tab=tags


.. raw:: html

    <script>
        var package = "ena-webin-cli";
        var versions = ["9.0.3","9.0.2","9.0.1","9.0.1","9.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-webin-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-webin-cli/README.html